const {User} = require('../model')

module.exports.createUser = async(req, res, next) => {
    try {
        const {body} = req
        const user = await User.create(body)
        res.status(201).send(user)
    } catch (error) {
        next(error)
    }
}
module.exports.getUserById = async(req, res, next) => {
    try{
        const {params:{userId}} = req
        const user = await User.findById(userId).populate('comments')
        res.status(200).send(user)
    }catch(error){
        next(error)
    }
}
module.exports.getAllUser = async(req, res, next) => {
    try {
        const AllUser = await User.find({})
        res.status(200).send(AllUser)
    } catch (error) {
        next(error)
    }
}