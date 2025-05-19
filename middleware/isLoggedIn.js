const jwt = require('jsonwebtoken')
const userModel = require('../model/user-model')

const isLoggedIn = async (req, res, next) =>{

    const token = req.cookies.token
    if(!token){
        req.flash('error', 'Please login first')
        return res.redirect('/')
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_KEY)
        const user = await userModel.findOne({email: decoded.email})
        .select('-password')
        req.user = user
        next()
    } catch(err){
        req.flash('error', 'Something went wrong')
        return res.redirect('/')
    }
}

module.exports = isLoggedIn