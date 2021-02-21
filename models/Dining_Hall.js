const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Dining_Hall = sequelize.define(
    "Dining_Hall",
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      hall_name: {
        type: DataTypes.STRING,
      },
      hall_location: {
        type: DataTypes.STRING,
      },
    },
    { freezeTableName: true, timestamps: false }
  );
  return Dining_Hall;
};
