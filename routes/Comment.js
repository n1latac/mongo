const {Router} = require('express')
const {createComment} = require('../controllers/Comment.controller')
const commentRouter = Router()

commentRouter.post('/:userId', createComment)

module.exports = commentRouter