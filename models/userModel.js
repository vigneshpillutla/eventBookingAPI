module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      unique: true,
      isEmail: true, //checks for email format
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, { timestamps: true },)
  return User
}