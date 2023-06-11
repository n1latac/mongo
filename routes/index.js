const {Router} = require('express')
const router = Router()
const saladRouter = require('./Salad')

router.use('/salads', saladRouter)

module.exports = router