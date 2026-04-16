var mysql = require('mysql');

var db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'test',
  port: 3306
};

var pool = mysql.createPool(db_config);

module.exports = pool;