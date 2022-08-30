const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
    postTitle: {
        type: String,
        required: true
    },
    postBody:{
        type:String,
        required:true
    }
})

mongoose.model('Post', postSchema)
