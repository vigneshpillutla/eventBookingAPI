module.exports = (sequelize, DataTypes) => {
  const Venue = sequelize.define("venue", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    addressLine1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    durationInMinutes: {
      type: DataTypes.REAL,
      allowNull: false
    }
    
  }, { timestamps: true },)
  return Venue
}