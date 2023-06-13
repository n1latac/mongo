const {Router} = require('express')
const {createComment, getComment} = require('../controllers/Comment.controller')
const commentRouter = Router()

commentRouter.post('/:userId', createComment)
commentRouter.get('/:commentId',getComment)

module.exports = commentRouter