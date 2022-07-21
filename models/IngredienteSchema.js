const mongoose = require('mongoose')

const ingredienteSchema = new mongoose.Schema({
    name: String,
    price: Number,
    cost: Number
})

module.exports = mongoose.model('Ingredientes', ingredienteSchema)