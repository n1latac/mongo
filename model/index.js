const mongoose = require('mongoose')
const Salad = require('./Salad')
const User = require('./User')
const Comment = require('./Comment')

mongoose.connect('mongodb://localhost:27017/fm')
.catch(err=>{
    console.log('connection failed')
    //next(err)
    process.exit(1)
})

module.exports = {
    Salad,
    User,
    Comment
}