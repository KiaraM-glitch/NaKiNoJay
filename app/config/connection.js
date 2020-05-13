// Dependencies:
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("witter_db", "root", "password", {
    host: "localhost",
    port: 3306,
    dialect: "mysql"
});

module.exports = sequelize;