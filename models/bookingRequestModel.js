module.exports = (sequelize, DataTypes) => {
  const BookingRequest = sequelize.define("bookingRequest", {
    startTime: {type:DataTypes.DATE,allowNull:false},
    isApproved:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, { timestamps: true },)
  return BookingRequest
}