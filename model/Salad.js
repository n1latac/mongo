const mongoose = require('mongoose')

const saladSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    weight: String,
    ingredients: Array,
    sauce: String,
    dietType: String,
    spicy: Boolean,
    expired: {
        type: Date,
        validate: {
            validator: (value) => value > new Date(),
            message: 'date is bad'
        }
    }
})

const Salad = mongoose.model('Salad', saladSchema)

module.exports = Salad