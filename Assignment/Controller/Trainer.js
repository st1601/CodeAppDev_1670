//const { insertObject } = require('../databaseHandel')
const express = require('express')
const router = express.Router()
const DATABASE_NAME = "Appdev1670";
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017'

router.get('/', (req, res) => {
    res.render('ListTrainee')
})

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- --GradeTrainee
router.get('/addGrade', (req, res) => {
    res.render('GradeTrainee')
})
router.post('/addGrade', async(req, res) => {
    const nameInput = req.body.txtTraineeGrade;
    const typeGrade = req.body.typeGrade;
    const newGrade = { Name: nameInput, Type: typeGrade }
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    await dbo.collection("listGrade").insertOne(newGrade);
    res.render("/");
})

router.post('/searchGrade', async(req, res) => {
    const searchInput = req.body.txtSearch;
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    const allGrade = await dbo.collection("listGrade").find({ Name: searchInput }).toArray();
    res.render('GradeTrainee', { data: allGrade })
});

router.get('/deleteGrade', async(req, res) => {
    const id = req.query.id;
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    await dbo.collection("listGrade").deleteOne({ "_id": ObjectId(id) });
    res.redirect("/");
});

router.get('/', async(req, res) => {
        const client = await MongoClient.connect(url);
        const dbo = client.db(DATABASE_NAME)
        const Grade = await dbo.collection("listGrade").find({}).toArray();
        res.render('GradeTrainee', { data: Grade });
        return dbo;
    })
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

module.exports = router;