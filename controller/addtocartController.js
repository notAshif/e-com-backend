const userModel = require('../model/user-model')

const addtocart = async (req, res) =>{
    const user = await userModel.findOne({ email: req.user.email })
    user.cart.push(req.params.product)
    await user.save()
    req.flash('success', 'Product added to cart')
    res.redirect('/shop')    
}

module.exports = addtocart