module.exports = (sequelize, DataTypes) => {
  const Equipment = sequelize.define("equipment", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, { timestamps: true ,
    tableName: "equipments"
  })
  return Equipment
}