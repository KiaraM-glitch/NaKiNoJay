var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Wit = sequelize.define("wit", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
});

Wit.sync();

module.exports = Wit;