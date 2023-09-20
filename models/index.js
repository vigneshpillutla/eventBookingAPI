const { request } = require('express')
const {Sequelize, DataTypes} = require('sequelize')

// database name is eventBooking
const sequelize = new Sequelize(`postgres://postgres:postgres@localhost:5432/eventBooking`, {dialect: "postgres",
logging: console.log})

// const sequelize = new Sequelize(`postgres://postgres:root@localhost:5432/eventBooking`, {dialect: "postgres",
// logging: console.log})

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
const BookingRequest = require('./bookingRequestModel') (sequelize,DataTypes)
const EquipmentBookingQuantity = require('./equipmentBookingQuantityModel') (sequelize,DataTypes)
const EquipmentInventory = require('./equipmentInventoryModel') (sequelize,DataTypes)

// Configuring relations
Sport.hasMany(Venue)
Venue.belongsTo(Sport)

Sport.hasMany(Equipment)
Equipment.belongsTo(Sport)

Venue.belongsToMany(Equipment, {through: EquipmentInventory})
Equipment.belongsToMany(Venue, {through: EquipmentInventory})

User.hasMany(BookingRequest)
Venue.hasMany(BookingRequest)
BookingRequest.belongsTo(User)
BookingRequest.belongsTo(Venue)

Equipment.belongsToMany(BookingRequest,{through: EquipmentBookingQuantity })
BookingRequest.belongsToMany(Equipment,{through: EquipmentBookingQuantity})


const instanceMethods = Object.getOwnPropertyNames(BookingRequest.prototype);

console.log('Instance methods for BookingRequest model:');
console.log(instanceMethods);

db.users = User
db.sports = Sport
db.venues = Venue
db.equipments = Equipment
db.bookingRequests = BookingRequest
db.equipmentInventories = EquipmentInventory

// Populating dummy data for testing
db.populate = async() => {
    await Sport.bulkCreate(
        [
            {name: "cricket"},
            {name: "football"},
            {name: "table tennis"},
        ]
    )
    
    await Equipment.bulkCreate([
        {name:"Table Tennis Table",sportId:3},
        {name:"tennis racket",sportId:3},
        {name:"ping pong ball",sportId:3},
        {name:"cricket bat",sportId:1},
        {name:"ball",sportId:1},
        {name:"wicket",sportId:1},
        {name:"pad",sportId:1},
        {name:"football",sportId:2},
        {name:"gloves",sportId:2},
    ])
}

//exporting the module
module.exports = db