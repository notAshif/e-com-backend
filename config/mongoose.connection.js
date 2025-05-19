const mongoose = require('mongoose')
const config = require('./config')

const debug = require('dbgr')('development: mongoose') 

mongoose.connect(`${config.get('MONGO_URL')}/scatch`)
.then(() =>{
    debug("connected to db");
}).catch((err) =>{
    debug(err); 
})