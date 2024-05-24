// const mysql = require('mysql2');

// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Sayali@1323',
//   database: 'sys' 
// });

// module.exports = pool.promise();


const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete','root','Sayali@1323',
{dialect: 'mysql', host: 'localhost'})

module.exports = sequelize;