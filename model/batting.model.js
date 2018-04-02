module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'batting',
    {
      playerID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      yearID: {
        type: DataTypes.SMALLINT,
        primaryKey: true,
      },
      HR: DataTypes.TINYINT,
    },
    {
      tableName: 'batting',
      timestamps: false,
    }
  )
}
