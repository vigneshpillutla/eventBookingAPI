const express = require('express')
const dotenv = require('dotenv').config()
const cookieParser = require('cookie-parser')
const cors = require('cors') 
const db = require('./models')
 const userRoutes = require ('./routes/userRoutes')
 const adminRoutes = require('./routes/adminRoutes')
 const dataRoutes = require('./routes/dataRoutes')
 const bookingRoutes = require('./routes/bookingRoutes')


 
 
 //setting up your port
 const PORT = process.env.PORT || 8080

 // Add origins to be allowed here
 const allowedOrigins = ['http://localhost:5173'];
 //assigning the variable app to express
 const app = express()
 
 //middleware
 app.use(cors({
    origin: function(origin, callback){
      // allow requests with no origin 
      // (like mobile apps or curl requests)
      if(!origin) return callback(null, true);
      if(allowedOrigins.indexOf(origin) === -1){
        var msg = 'The CORS policy for this site does not ' +
                  'allow access from the specified Origin.';
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    credentials: true
  }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

// //synchronizing the database and forcing it to false so we dont lose data
db.sequelize.sync({ force: true }).then(() => {
    console.log("db has been re sync")
    db.populate()
})

//routes for the user API
app.use('/api/users', userRoutes)
app.use('/api/admin',adminRoutes)
app.use('/api/data',dataRoutes)
app.use('/api/venue',bookingRoutes)

//listening to server connection
app.listen(PORT, () => console.log(`Server is connected on ${PORT}`))

