module.exports = {
  development: {
    database: 'lahman2016',
    username: 'myUser',
    password: 'myPass',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
}
