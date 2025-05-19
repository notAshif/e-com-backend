const express = require('express')
const router = express.Router()
const isLoggedIn = require('../middleware/isLoggedIn')
const getAllProducts = require('../controller/shopController');
const addtocart = require('../controller/addtocartController');
const userModel = require('../model/user-model');

router.get('/', (req, res) => {
    const error = req.flash('error')
    const success = req.flash('success')
    res.render('index', { error, success, LoggedIn: false })
})

router.get('/addtocart/:product', isLoggedIn, addtocart)

router.get('/shop',isLoggedIn, getAllProducts)



router.post('/remove-from-cart/:id', isLoggedIn, async (req, res) =>{
    const user = await userModel.findOne({ email: req.user.email })
    user.cart.pull(req.params.id)
    await user.save()
    res.redirect('/cart')
})

router.get('/cart', isLoggedIn, async (req, res) =>{
    let user = await userModel.findOne({ email: req.user.email }).populate('cart')
    res.render('cart', { user })
})

router.get('/logout', isLoggedIn ,(req, res) =>{
    res.render('shop')
})

router.get('/account', isLoggedIn, async (req, res) => {
  try {
    const user = await userModel.findOne({ email: req.user.email })
      .populate('cart')
      .populate('orders')
      .exec();

    if (!user) {
      return res.status(404).send('User not found');
    }

    res.render('account', { user });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
});


router.post('/account/update', isLoggedIn, async (req, res) =>{
    try{
        const { fullname, contact, email } = req.body
        const user = await userModel.findByIdAndUpdate(req.user._id,{ fullname, contact, email}, { new: true })
        res.redirect('/account');
    } catch(err){
        console.log(err.message);
        
    }
})


module.exports = router