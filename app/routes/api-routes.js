// Dependencies
var wits_db = require("../models/wits.js");

var accounts_db = require("../models/accounts.js");



// Routes

module.exports = function(app) {
    app.get("/api/all", function(req, res) {
        wits_db.findAll({}).then(function(results) {
            res.json(results)
        })
    })

    app.post("/api/signup", function(req, res) {
        console.log("API ROUTE SUCCESS")
        accounts_db.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(function() {
            console.log("new account made")
            // res.redirect(307, "/api/login")
        })
        .catch(function(err) {
            res.status(401).json(err);
        })
    })
}

