var mysql = require("mysql");

const db = () => {
  var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "beclever",
  });

  connection.connect();
  return connection;
};

module.exports = db;
