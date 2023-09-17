module.exports = (sequelize, DataTypes) => {
  const EquipmentBookingQuantity = sequelize.define("equipmentBookingQuantity", {
    quantity: {
      type: DataTypes.REAL,
      allowNull: false
    }
  }, { timestamps: true },)
  return EquipmentBookingQuantity
}