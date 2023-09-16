module.exports = (sequelize, DataTypes) => {
  const Sport = sequelize.define("sport", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    
  }, { timestamps: true },)
  return Sport
}