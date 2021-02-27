export default (database, DataTypes) => {
  const DiningHall = database.define(
    'DiningHall',
    {
      hall_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
      },
      hall_name: {
        type: DataTypes.STRING
      },
      hall_location: {
        type: DataTypes.STRING
      }
    },
    { freezeTableName: true, timestamps: false }
  );
  return DiningHall;
};
