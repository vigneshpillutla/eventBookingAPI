const {Sequelize, DataTypes} = require('sequelize')

//Database connection with dialect of postgres specifying the database we are using
//port for my database is 5432
//database name is discover
const sequelize = new Sequelize(`postgres://postgres:root@localhost:5432/eventBooking`, {dialect: "postgres",define:{underscored:true}})

//checking if connection is done
    sequelize.authenticate().then(() => {
        console.log(`Database connected to eventBooking`)
    }).catch((err) => {
        console.log(err)
    })

    const db = {}
    db.Sequelize = Sequelize
    db.sequelize = sequelize

//connecting to model
const User = require('./userModel') (sequelize, DataTypes)
const Sport = require('./sportModel') (sequelize,DataTypes)
const Venue = require('./venueModel') (sequelize,DataTypes)
const Equipment = require('./equipmentModel') (sequelize,DataTypes)

Sport.hasMany(Venue)
Venue.belongsTo(Sport)

Equipment.belongsToMany(Venue, {through: 'equipmentInventory'})
Venue.belongsToMany(Equipment, {through: 'equipmentInventory'})

db.users = User
db.sports = Sport
db.venues = Venue
db.equipments = Equipment

db.populate = async() => {
    await Sport.bulkCreate(
        [
            {name: "cricket"},
            {name: "football"},
            {name: "table tennis"},
        ]
    )
    
    await Equipment.bulkCreate([
        {name:"Table Tennis Table"},
        {name:"tennis racket"},
        {name:"ping pong ball"},
        {name:"cricket bat"},
        {name:"ball"},
        {name:"wicket"},
        {name:"pad"},
        {name:"football"},
        {name:"gloves"},
    ])
}

//exporting the module
module.exports = db