module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define("equipment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, { timestamps: true },)
  return Equipment
}