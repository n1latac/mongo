const {Router} = require('express')
const router = Router()
const saladRouter = require('./Salad')
const userRouter = require('./User')
const commentRouter = require('./Comment')

router.use('/salads', saladRouter)
router.use('/users', userRouter)
router.use('/comments', commentRouter)

module.exports = router