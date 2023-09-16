module.exports = (sequelize, DataTypes) => {
  const BookingRequest = sequelize.define("bookingRequest", {
    
  }, { timestamps: true },)
  return BookingRequest
}