const express = require('express')
const sequelize = require('sequelize')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
 const db = require('./models')
 const userRoutes = require ('./routes/userRoutes')
 const adminRoutes = require('./routes/adminRoutes')
 const dataRoutes = require('./routes/dataRoutes')
 

//setting up your port
const PORT = process.env.PORT || 8080

//assigning the variable app to express
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

//synchronizing the database and forcing it to false so we dont lose data
// db.sequelize.sync({ force: true }).then(() => {
//     console.log("db has been re sync")
//     db.populate()
// })

//routes for the user API
app.use('/api/users', userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/data',dataRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))

