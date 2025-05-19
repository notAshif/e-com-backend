const userModel = require('../model/user-model');
const bcrypt = require('bcrypt');
const generateAuthToken = require('../util/generateAuthToken');

const registerUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;

        const userExist = await userModel.findOne({ email });
        if (userExist) {
            req.flash('error', 'User already exists, please login');
            return res.redirect('/');
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await userModel.create({
            fullname,
            email,
            password: hashedPassword
        });

        const token = generateAuthToken(user);
        res.cookie('token', token);
        req.flash('success', 'User registered successfully');
        res.redirect('/');
    } catch (err) {
        console.error(err.message);
        req.flash('error', 'Internal Server Error');
        res.redirect('/');
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });
        if (!user) {
            req.flash('error', 'User does not exist, you need to register');
            return res.redirect('/');
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            req.flash('error', 'Email or password is incorrect');
            return res.redirect('/');
        }

        const token = generateAuthToken(user);
        res.cookie('token', token);
        req.flash('success', 'User logged in successfully');
        res.redirect('/shop');
    } catch (err) {
        console.error(err.message);
        req.flash('error', 'Internal Server Error');
        res.redirect('/');
    }
};

const logoutUser = async (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        req.flash('error', 'You are not logged in');
        return res.redirect('/');
    }

    try {
        const jwt = require('jsonwebtoken');
        const decoded = jwt.verify(token, process.env.JWT_KEY);


        await userModel.findOneAndDelete({ email: decoded.email });

        
        res.clearCookie('token');
        req.flash('success', 'User logged out and deleted successfully');
        res.redirect('/');
    } catch (err) {
        console.error(err);
        req.flash('error', 'Something went wrong during logout');
        res.redirect('/');
    }
}


module.exports = {
    registerUser,
    loginUser,
    logoutUser
};
