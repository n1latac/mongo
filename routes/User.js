const {Router} = require('express')
const userRouter = Router()
const {createUser, getUserById} = require('../controllers/User.controller')

userRouter.post('/', createUser)
userRouter.get('/:userId', getUserById)

module.exports = userRouter