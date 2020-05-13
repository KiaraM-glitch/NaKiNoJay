var Sequelize = require("sequelize");

var sequelize = require("../config/connection.js");

var Wit = sequelize.define("wit", {
    author: Sequelize.STRING,
    body: Sequelize.STRING,
});

var Account = sequelize.define("account", {
    username: Sequelize.STRING,
    password: Sequelize.STRING,
});

Wit.sync();

Account.sync()



module.exports = Wit;

module.exports = Account;