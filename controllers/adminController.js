const db = require("../models");

const {equipments:Equipment,sports:Sport,venues:Venue} = db;

const addEquipments = async(req,res) => {
  const equipments = req.body['equipments']
  try {
    await Equipment.bulkCreate(equipments);
    return res.status(200).json("created")
  } catch (error) {
    return res.status(500)
  }
}

const addSport = async(req,res) => {
  const sport = req.body['sport']
  try {
    await Sport.create(sport)
    return res.status(200).json("Created")
  } catch (error) {
    return res.status(500)
    
  }
}

const addVenue = async(req,res) => {
  try {
    const {name,addressLine1,durationInMinutes,sportId,equipments} = req.body;

    const venue = await Venue.create({
      name,
      addressLine1,durationInMinutes,sportId
    })
    await venue.setEquipment(equipments)
    return res.status(200).json("done")
  } catch (error) {
    return res.status(500)
  }
}


module.exports = {
  addEquipments,
  addSport,
  addVenue
}