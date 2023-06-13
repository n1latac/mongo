const {Comment, User} = require('../model')


module.exports.createComment = async(req, res, next) => {
    try {
        const {params: {userId}, body} = req
        const comment = await Comment.create({...body, userId})
        const user = await User.findById(userId)
        user.comments.push(comment._id)
        await user.save()
        res.status(201).send(comment)
    } catch (error) {
        next(error)
    }
}
module.exports.getComment = async(req, res, next) => {
    try {
        const {params: {commentId}} = req
        const comment = await Comment.findById(commentId).populate('userId')
        res.status(200).send(comment)
    } catch (error) {
        next(error)
    }
}
