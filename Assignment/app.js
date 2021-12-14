const express = require('express')
const app = express()
app.use(express.static('public'))
    //const { ObjectId, MongoClient } = require('mongodb');
const DATABASE_NAME = "Appdev1670";
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('index')
})


// app.post('/add', async(req, res) => {
//     const idInput = req.body.txtID;
//     const nameInput = req.body.txtName;
//     const gmailInput = req.body.txtGmail;
//     const ageInput = req.body.txtAge;
//     const BirthdayInput = req.body.txtBirthday;
//     const newTrainee = { ID: idInput, Name: nameInput, Gmail: gmailInput, Age: ageInput, Birthday: BirthdayInput }
//     const client = await MongoClient.connect(url);
//     const dbo = client.db(DATABASE_NAME);
//     await dbo.collection("trainee").insertOne(newTrainee);
//     res.redirect("/");
// })

// app.get('/', async(req, res) => {
//     const client = await MongoClient.connect(url);
//     const dbo = client.db(DATABASE_NAME)
//     const allTrainee = await dbo.collection("Trainee").find({}).toArray();
//     res.render('ListTrainee', { data: allTrainee });
//     return dbo;
// })
const TrainerCtl = require('./controller/Trainer')
app.use('/Trainer', TrainerCtl)

const PORT = process.env.PORT || 5010
app.listen(PORT)
console.log("Server is running! " + PORT)