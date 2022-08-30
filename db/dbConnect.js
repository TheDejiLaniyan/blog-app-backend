const mongoose = require('mongoose')
require('dotenv').config()

const dbConnect = async ()=>{
    mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
            
        }).then(() =>{
            console.log('successfully connected to mongodb atlas')
        }).catch((err) =>{
            console.log('unable to connect to mongodb atlas')
            console.log(err)
        })
}

module.exports = dbConnect
