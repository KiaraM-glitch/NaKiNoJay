// Dependencies
var wits_db = require("../models/wits.js");

var accounts_db = require("../models/accounts.js")

var bcrypt = require("bcryptjs")

var sequelize = require("sequelize")


// Routes

module.exports = function(app) {
    var pass = ""

    let hashedPass = ""

    app.get("/api/all", function(req, res) {
        wits_db.findAll({}).then(function(results) {
            res.json(results)
        })
    })

    app.post("/api/signup", function(req, res) {
        
        pass = req.body.password

        bcrypt.hash(pass, 1, (err, hash) => {
            if (err) {
                console.log(err)
                return
            }

            hashedPass = hash

            accounts_db.create({
                username: req.body.username,
                password: hashedPass
            })

            .then(function() {
                console.log("new account made")
                // res.redirect(307, "/api/login")
            })

            .catch(function(err) {
                res.status(401).json(err);
            })
        })
    })

    app.post("/api/login", function(req, res) {
        
    })
}

