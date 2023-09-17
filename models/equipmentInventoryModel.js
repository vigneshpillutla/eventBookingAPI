module.exports = (sequelize, DataTypes) => {
  const EquipmentInventory = sequelize.define("equipmentInventory", {
    stock: {
      type: DataTypes.REAL,
      allowNull: false
    },
    
  }, { timestamps: true })
  return EquipmentInventory
}