const mongoose= require('mongoose')


mongoose.connect('mongodb://localhost:27017/scatch')

const OwnerSchema = new mongoose.Schema({
    fullname: {
        type: String,
        minlength: 3,
        trim: true
    },
    email: String,
    password: String,
    products:{
        type: Array,
        default: []
    },
    picture: String,
    gstin: String
})

module.exports = mongoose.model('owner', OwnerSchema)