const { options } = require('../app')
const {Salad} = require('../model/index')

module.exports.createSalad = async (req, res, next) => {
    try {
        const {body} = req
        const salad = await Salad.create(body)
        res.status(201).send(salad)
    } catch (error) {
        next(error)
    }

}
module.exports.getSalad = async (req, res, next) => {
    try {
        const {params:{saladId}} = req
        const result = await Salad.findById(saladId)
        if(!result){
            return res.status(400).send('no such salad')
        }
        return res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}
module.exports.getAllSalads = async (req, res, next) => {
    try {
        const result = await Salad.find({})
        return res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}
module.exports.updateSalad = async (req, res, next) => {
    try {
        const {params: {saladId},body} = req
        console.log(saladId)
        const result = await Salad.findByIdAndUpdate(saladId, body,{returnDocument: 'after'})
        return res.status(201).send(result)
    } catch (error) {
        next(error)
    }
}
module.exports.deleteSalad = async (req, res, next) => {
    try {
        const {params: {saladId}} = req
        console.log(saladId)
        const result = await Salad.findByIdAndDelete(saladId)
        return res.status(200).send(result)
    } catch (error) {
        next(error)
    }
}