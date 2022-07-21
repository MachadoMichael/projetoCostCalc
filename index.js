const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const PORT = 3000
require('dotenv').config()
const Ingredientes = require('./models/IngredienteSchema')

const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

let db = mongoose.connection

db.once('open', () => {
    console.log('DB carregado')
})

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@clustercostcalc.urg3z.mongodb.net/NordSystem`)

app.use(express.static(path.join(__dirname, 'client/build')))

app.get('/lendoIngredientes', async (req, res)=>{
    let docs = await Ingredientes.find({})
    res.send(docs)
})

app.post('/addIngrediente', express.json(), async (req, res)=>{
    let ingrediente = new Ingredientes(req.body)
   
    console.log(req.body)
    try {
        let doc = await ingrediente.save()
        let docs = await Ingredientes.find({})
        res.send(docs)
    } catch (error) {
        console.log(error)
    }
})

app.delete('/removendoIngrediente', express.json(), async (req, res)=>{
    let id = req.body._id
    console.log(req.body)
    try {
        await Ingredientes.findByIdAndDelete(id)
        let docs = await Ingredientes.find({})
        res.send(docs)
    } catch (error) {
        console.log(error)
    }
})

app.listen(PORT, () => {
    console.log('Welcome')
})