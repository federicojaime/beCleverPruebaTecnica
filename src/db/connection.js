var mysql = require("mysql");
var config = require("./../utils/config.js");

const db = () => {
  var connection = null;
  try {
    connection = mysql.createPool({
      connectionLimit : 10,
      host            : config.DB_HOST,
      user            : config.DB_USER,
      password        : config.DB_PASS,
      database        : config.DB_NAME
    });
  } catch (error) {
    console.log(error);
  }
  return connection;
};

module.exports = db;
