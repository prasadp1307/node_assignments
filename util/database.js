const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'Sayali@1323', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
