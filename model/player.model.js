module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'player',
    {
      playerID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      nameFirst: {
        type: DataTypes.STRING,
      },
      nameLast: {
        type: DataTypes.STRING,
      },
    },
    {
      tableName: 'master',
      timestamps: false,
    }
  )
}
