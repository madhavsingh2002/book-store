const mongoose = require('mongoose')
const connectToMongo =async()=>{
    const res = await mongoose.connect('mongodb://127.0.0.1:27017/bookstore');
    res && console.log('connect to database...')

}
module.exports = connectToMongo;