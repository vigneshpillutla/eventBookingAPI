const db = require("../models");

const {bookingRequests:BookingRequest} = db;


const createBookingRequest = async (req,res) => {
  try{

    const {userId,venueId,equipmentQuantities,startTime} = req.body;  
    const booking = await BookingRequest.create({
      userId,
      venueId,
      startTime,
      isApproved:false
    })
    const addEquipmentsToTable = equipmentQuantities.map(async({equipmentId,quantity}) => booking.addEquipment(equipmentId,{through:{quantity}}))
    
    await Promise.all(addEquipmentsToTable)
    
    return res.json(booking)
  }
  catch(error){
    return res.send(error)
  }
}

const getPendingBookingRequests = async(req,res) => {
  try {
    const bookings = await BookingRequest.findAll({where:{isApproved:false}});
    return res.json(bookings)
  } catch (error) {
    return res.status(500).send(error)
  }
}

const approveBookingRequest = async(req,res) => {
  try {
    const {bookingId} = req.params
    await BookingRequest.update({isApproved:true},{
      where:{
        id:bookingId
      }
    })

    return res.send("Approved")
  } catch (error) {
    return res.status(500).send(error)
    
  }
}


module.exports = {
  createBookingRequest,
  getPendingBookingRequests,
  approveBookingRequest
}