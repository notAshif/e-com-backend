const express = require('express')
const router = express.Router()
const createProduct = require('../controller/productsController')
const upload = require('../config/multer-config')
const productModel = require('../model/products-model')

router.get('/', (req, res) =>{
    res.send('hello, its product')
})

router.post('/create',upload.single('image'), createProduct)



module.exports = router