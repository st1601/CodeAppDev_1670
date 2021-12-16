const express = require('express')
const router = express.Router()
const DATABASE_NAME = "Appdev1670";
const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://localhost:27017';


router.get('/', (req, res) => {
        res.render('TrainerMain')
    })
    // ---------------------------------------------------TrainerMain
router.get('/addCourseButton', async(req, res) => {
    // const id = req.query.id;
    // var ObjectId = require('mongodb').ObjectId;
    // const client = await MongoClient.connect(url);
    // const dbo = client.db(DATABASE_NAME);
    // const newCourse = await dbo.collection("listCourse").findOne({
    //     _id: ObjectId(id)
    // });
    res.render('addCourse')
})


// -- -- -- -- -- -- -- -- -- -- -- ---------------- -- -- --GradeTrainee
router.get('/Trainer', (req, res) => {
    res.render('TrainerMain')
})

router.post('/addGrade', async(req, res) => {
    const nameInput = req.body.txtTraineeGrade;
    const typeGrade = req.body.typeGrade;
    const newGrade = { name: nameInput, TypeGrade: typeGrade }
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    await dbo.collection("listGrade").insertOne(newGrade);
    res.redirect("/Trainer");
})

router.post('/searchGrade', async(req, res) => {
    const searchInput = req.body.txtSearch;
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    const allGrade = await dbo.collection("listGrade").find({ name: searchInput }).toArray();
    res.render('GradeTrainee ', { data: allGrade })
});

router.get('/deleteGrade', async(req, res) => {
    const id = req.query.id;
    var ObjectId = require('mongodb').ObjectId;
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    await dbo.collection("listGrade").deleteOne({ "_id": ObjectId(id) });
    res.redirect("/Trainer");
});

router.get('/editGrade', async(req, res) => {
    const id = req.query.id;
    var ObjectId = require('mongodb').ObjectId;
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    const g = await dbo.collection("listGrade").findOne({
        _id: ObjectId(id)
    });
    res.render('editGrade', { changeGrade: g });
})

router.post('/updateGrade', async(req, res) => {
    const id = req.body.txtId;
    var ObjectId = require('mongodb').ObjectId;
    const nameInput = req.body.txtTraineeGrade;
    const typeGrade = req.body.typeGrade;
    const filter = { _id: ObjectId(id) }
    const client = await MongoClient.connect(url);
    const dbo = client.db(DATABASE_NAME);
    await dbo.collection("listGrade").updateOne(filter, { $set: { name: nameInput, TypeGrade: typeGrade } })
    res.redirect("/Trainer");
})

router.get('/', async(req, res) => {
        const client = await MongoClient.connect(url);
        const dbo = client.db(DATABASE_NAME);
        const allGrade = await dbo.collection("listGrade").find({}).toArray();
        res.render('GradeTrainee', { data: allGrade });
        return dbo;
    })
    // -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- 

module.exports = router;