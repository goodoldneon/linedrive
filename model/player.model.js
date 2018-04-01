module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'player',
    {
      playerID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      birthYear: DataTypes.SMALLINT,
      birthMonth: DataTypes.TINYINT,
      birthDay: DataTypes.TINYINT,
      nameFirst: DataTypes.STRING,
      nameLast: DataTypes.STRING,
      nameFull: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING, ['nameFirst', 'nameLast']),
        get: function() {
          return `${this.nameFirst} ${this.nameLast}`
        },
      },
      birthDate: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING, ['birthYear', 'birthMonth', 'birthDay']),
        get: function() {
          return new Date(this.birthYear, this.birthMonth, this.birthDay)
        },
      },
    },
    {
      tableName: 'master',
      timestamps: false,
    }
  )
}
