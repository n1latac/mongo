const mongoose = require('mongoose')
const {Schema} = mongoose

const commentSchema = new Schema({
    title: String,
    text: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Comment = mongoose.model('Comment', commentSchema)
module.exports = Comment