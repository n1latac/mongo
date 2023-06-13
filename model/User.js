const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
})


const User = mongoose.model('User', userSchema)
module.exports = User