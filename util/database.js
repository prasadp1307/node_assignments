const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Sayali@1323',
  database: 'sys' 
});

module.exports = pool.promise();
