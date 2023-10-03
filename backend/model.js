const mongoose = require('mongoose')
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    writer:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    available:{
        type:Boolean,
        required:true,
    },
    image:{
        data: Buffer,
        contentType: String,
    },
})
const bookModel = mongoose.model('book',bookSchema)
module.exports =bookModel;