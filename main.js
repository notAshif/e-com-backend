const cookieParser = require('cookie-parser')
const express = require('express')
const path = require('path')
const ownerRoutes = require('./routes/ownerRoutes')
const userRoutes = require('./routes/userRoutes')
const productRoutes = require('./routes/productRoutes')
const index = require('./routes/index')
const flash = require('req-flash')
const session = require('express-session')
require('dotenv').config()
const app = express()

app.use(express.json())
app.use(session({
    secret: process.env.JWT_KEY,
    resave: false,
    saveUninitialized: false
}))
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser())
app.use(flash())
app.set('view engine', 'ejs')
app.use('/', index)
app.use('/owner', ownerRoutes)
app.use('/users', userRoutes)
app.use('/products',productRoutes)

app.listen(3000, () => {
    console.log('listening on port 3000')
})