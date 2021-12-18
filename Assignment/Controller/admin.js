const express = require('express')
const { insertObject } = require('../databaseHandel')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('adminIndex')
})

router.get('/addUser', (req, res) => {
    res.render('addUser')
})

//Submit add User
router.post('/addUser', (req, res) => {
    const name = req.body.txtName
    const role = req.body.Role
    const pass = req.body.txtPassword
    const objectToInsert = {
        userName: name,
        role: role,
        password: pass
    }
    insertObject("Users", objectToInsert)
    res.render('adminIndex')
})
app.get('/editStaff', async (req, res) => {
    const id = req.query.id;
    const p = await getStaffById(id);
    res.render("edit", { staff: s });
})
app.post('/updateStaff', async (req, res) => {
    const nameInput = req.body.txtName;
    const quantityInput = req.body.txtQuantity;
    const priceInput = req.body.txtPrice;
    const id = req.body.txtId;

    updateStaff(id, nameInput, quantityInput, priceInput);
    res.redirect("/");
})

app.post('/insertStaff', async (req, res) => {
    const nameInput = req.body.txtName;
    const quantityInput = req.body.txtQuantity;
    const newStaff = { name: nameInput, quantity: quantityInput, price: priceInput, picture: pictureInput }
    insertStaff(newStaff);
    res.redirect("/");
})
app.get('/isS', (req, res)=>{
    res.render('insertStaff')
})
app.get('/delete', async (req, res) => {
    const id = req.query.id;
    await deleteStaff(id);
    res.redirect("/");
})
module.exports = router;