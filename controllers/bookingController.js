const db = require("../models");

const {bookingRequests:BookingRequest} = db;


const createBookingRequest = async (req,res) => {
  const {userId,venueId,equipmentQuantities} = req.body;  
  const equipments = equipmentQuantities.reduce((accu,curr) =>accu.push(curr.equipmentId),[])
  const booking = await BookingRequest.create({
    userId,
    venueId
  })

  await booking.setEquipment
}


module.exports = {
}