const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser  = require('body-parser')
const dbConnect = require('./db/dbConnect')
const Post = require('./db/userModel')

// app.use(cors(corsOptions))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

dbConnect()

app.get('/', (req, res, next) =>{
    res.json({ message: "Hey! This is your server response!" });
    next()
})



module.exports = app