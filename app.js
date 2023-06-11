const express = require('express')
const router = require('./routes')
const {errorHandler} = require('./errorHandler')

const app = express()

app.use(express.json())
app.use('/api', router)



app.use(errorHandler)


module.exports = app;