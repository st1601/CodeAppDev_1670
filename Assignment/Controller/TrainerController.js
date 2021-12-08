//const { insertObject } = require('../databaseHandel')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('ListTrainee')
})



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

// TrainerController.get('/', async(req, res) => {
//     //const client = await MongoClient.connect(url);
//     const dbo = client.db(DATABASE_NAME)
//     const allTrainee = await dbo.collection("Trainer").find({}).toArray();
//     res.render('ListTrainee', { data: allTrainee });
//     return dbo;
// })


module.exports = router;