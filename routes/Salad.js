const {Router} = require('express')
const {createSalad, getSalad, getAllSalads, updateSalad, deleteSalad} = require('../controllers/Salad.controller')

const saladRouter = Router()


saladRouter.get('/:saladId', getSalad)
saladRouter.post('/', createSalad)
saladRouter.get('/', getAllSalads)
saladRouter.patch('/:saladId',updateSalad)
saladRouter.delete('/:saladId',deleteSalad)

module.exports = saladRouter