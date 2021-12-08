const express = require('express')
const app = express()
app.use(express.urlencoded());
app.set('view engine', 'hbs')
app.use(express.static('public'))
app.set('view engine', 'hbs')
app.use(express.urlencoded({ extended: true }))
    //app.use(session({ secret: '124447yd@@$%%#', cookie: { maxAge: 60000 }, saveUninitialized: false, resave: false }))


app.get('/', (req, res) => {
    res.render('index')
})

// app.post('/login', async(req, res) => {
//     const name = req.body.txtName
//     const pass = req.body.txtPass
//     const role = await checkUserRole(name, pass)
//     if (role == -1) {
//         res.render('login')
//     } else {
//         req.session["User"] = {
//             name: name,
//             role: role
//         }
//         console.log("Ban dang dang nhap voi quyen la: " + role)
//         res.redirect('/')
//     }
// })
// app.get('/login', (req, res) => {
//     res.render('login')
// })

const adminController = require('./controller/admin')
app.use('/admin', adminController)
    // const staffController = require('./staff')
    // app.use('/staff',staffController)

// const trainerController = require('./trainer')
// app.use('/trainer',trainerController)
const PORT = process.env.PORT || 5011
app.listen(PORT)
console.log("Server is running! " + PORT)