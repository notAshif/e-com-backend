const productModel = require('../model/products-model');


const getAllProducts = async (req, res) =>{
    const products = await productModel.find()
    const success = req.flash('success')
    res.render('shop', { products, success })
}

module.exports = getAllProducts