//const { insertObject } = require('../databaseHandel')
const express = require('express')
const router = express.Router()
const DATABASE_NAME = "Appdev1670";
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'
router.get('/', (req, res) => {
    res.render('ListTrainee')
})


// TrainerCtl.post('/add', async(req, res) => {
//         const quantityInput = req.body.txtQuantity;
//         const nameInput = req.body.txtName;
//         const priceInput = req.body.txtPrice;
//         const newProduct = { Name: nameInput, Price: priceInput, Quantity: quantityInput }
//         const client = await MongoClient.connect(url);
//         const dbo = client.db("AsmDB2");
//         await dbo.collection("Asm").insertOne(newProduct);
//         res.redirect("/");
//     })
// app.get('/delete', async(req, res) => {
//     const id = req.query.id;
//     const client = await MongoClient.connect(url);
//     const dbo = client.db("AsmDB2");
//     await dbo.collection("Asm").deleteOne({ "_id": ObjectId(id) });
//     res.redirect("/");
// });

// app.post('/search', async(req, res) => {
//     const searchInput = req.body.txtSearch;
//     const client = await MongoClient.connect(url);
//     const dbo = client.db("AsmDB2");
//     const allProducts = await dbo.collection("Asm").find({ Name: searchInput }).toArray();
//     res.render('index', { data: allProducts })
// });

router.get('/', async(req, res) => {
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME)
    const allTrainee = await dbo.collection("Trainer").find({}).toArray();
    res.render('ListTrainee', { data: allTrainee });
    return dbo;
})

module.exports = router;