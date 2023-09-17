const db = require("../models");

const {equipments:Equipment,sports:Sport,venues:Venue} = db;

const addEquipments = async(req,res) => {
  const equipments = req.body['equipments']
  try {
    await Equipment.bulkCreate(equipments);
    return res.status(200).json("created")
  } catch (error) {
    return res.status(500).send(error)
  }
}

const addSport = async(req,res) => {
  const sport = req.body['sport']
  try {
    await Sport.create(sport)
    return res.status(200).json("Created")
  } catch (error) {
    return res.status(500).send(error)
    
  }
}

const addVenue = async(req,res) => {
  try {
    const {name,addressLine1,durationInMinutes,sportId,equipments} = req.body;

    const venue = await Venue.create({
      name,
      addressLine1,durationInMinutes,sportId
    })
    const instanceMethods = Object.getOwnPropertyNames(Venue.prototype);

    console.log('Instance methods for Venue model:');
    console.log(instanceMethods);
    await venue.setEquipment(equipments)
    return res.status(200).json(venue)
  } catch (error) {
    console.log(error)
    return res.status(500).send(error)
  }
}


module.exports = {
  addEquipments,
  addSport,
  addVenue
}