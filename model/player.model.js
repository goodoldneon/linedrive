const { datePartsToDateString } = require('../common')

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    'player',
    {
      nameGiven: DataTypes.STRING,
      nameFirst: DataTypes.STRING,
      nameLast: DataTypes.STRING,
      nameFull: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING, ['nameFirst', 'nameLast']),
        get: function() {
          return `${this.nameFirst} ${this.nameLast}`
        },
      },
      birthYear: DataTypes.SMALLINT,
      birthMonth: DataTypes.TINYINT,
      birthDay: DataTypes.TINYINT,
      birthDate: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING, ['birthYear', 'birthMonth', 'birthDay']),
        get: function() {
          if (!this.birthYear || !this.birthMonth || !this.birthDay) {
            return null
          }

          return datePartsToDateString(this.birthYear, this.birthMonth, this.birthDay)
        },
      },
      birthCountry: DataTypes.STRING,
      birthState: DataTypes.STRING,
      birthCity: DataTypes.STRING,
      deathYear: DataTypes.SMALLINT,
      deathMonth: DataTypes.TINYINT,
      deathDay: DataTypes.TINYINT,
      deathDate: {
        type: new DataTypes.VIRTUAL(DataTypes.STRING, ['deathYear', 'deathMonth', 'deathDay']),
        get: function() {
          if (!this.deathYear || !this.deathMonth || !this.deathDay) {
            return null
          }

          return datePartsToDateString(this.deathYear, this.deathMonth, this.deathDay)
        },
      },
      deathCountry: DataTypes.STRING,
      deathState: DataTypes.STRING,
      deathCity: DataTypes.STRING,
      bats: DataTypes.STRING,
      throws: DataTypes.STRING,
      debut: DataTypes.STRING,
      finalGame: DataTypes.STRING,
      retroID: DataTypes.STRING,
      bbrefID: DataTypes.STRING,
      playerID: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    },
    {
      tableName: 'master',
      timestamps: false,
    }
  )
}
