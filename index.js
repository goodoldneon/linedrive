const model = require('./model')

const parseConfig = config => {
  const configDefault = {
    database: 'lahman2016',
    username: 'root',
    password: 'steel87',
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false,
  }

  return Object.assign({}, configDefault, config)
}

module.exports = function(config) {
  config = parseConfig(config)

  return model(config)
}
