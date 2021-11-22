const express = require('express')
const app = express()

app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})

const adminController = require('./admin')
app.use('/admin', adminController)

const PORT = process.env.PORT || 5011
app.listen(PORT)
console.log("Server is running! " + PORT)