const express = require('express')
const {errorHandler} = require('./errorHandler')
const {createSalad, getSalad, getAllSalads, updateSalad, deleteSalad} = require('./controllers/Salad.controller')

const app = express()

app.use(express.json())

app.get('/:saladId', getSalad)
app.post('/', createSalad)
app.get('/', getAllSalads)
app.patch('/:saladId',updateSalad)
app.delete('/:saladId',deleteSalad)

app.use(errorHandler)


module.exports = app;