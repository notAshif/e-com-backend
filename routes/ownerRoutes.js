const express = require('express')
const router = express.Router()
const ownerModel = require('../model/owner-model')



if(process.env.NODE_ENV === 'development'){
    router.post('/create', async (req, res) =>{
        const owner = await ownerModel.find()
        if(owner.length > 0){
            res.status(503).send('You dont have permission to create a new owner')
        }

        const {fullname, email, password} = req.body

        const createOwn = await ownerModel.create({
            fullname,
            email,
            password
        })
        res.status(201).send(createOwn)
    })
}

router.get('/admin', (req, res) =>{
    const success = req.flash('success')
    res.render('createproducts', { success })
})

module.exports = router