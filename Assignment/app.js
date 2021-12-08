const express = require('express')
const app = express()
app.use(express.urlencoded());
app.set('view engine', 'hbs')
app.use(express.static('public'))

const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))


app.get('/', (req, res) => {

    res.render('ListTrainee')
})

const TrainerCtl = require('./controller/TrainerController')
app.use('/TrainerController', TrainerCtl)

const PORT = process.env.PORT || 5001
app.listen(PORT)
console.log("Server is running! " + PORT)