// Dependencies
var db = require("../models")

var passport = require("../config/passport.js")


module.exports = function(app) {
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        res.json(req.user);
    });

    app.post("/api/signup", function(req, res) {

        db.User.create({
            username: req.body.username,
            password: req.body.password
        })
        .then(function() {
            res.redirect(307, "/api/login")
            console.log("Account Created")
        })
        .catch(function(err) {
            res.status(401).json(err);
        })

    })

    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/")
    })

    app.get("/api/user_data", function(req, res) {
        if (!req.user) {
            console.log("Not logged in")
            res.json({})
        } else {
            res.json({
                username: req.user.username,
                password: req.user.password
            });
        }
    });

    app.get("/api/all_wits", function (req, res) {
        db.Wit.findAll({}).then(function(results) {
            // results are available to us inside the .then
            res.json(results);
        })
    })

    app.post("/api/witter", function(req, res) {
        db.Wit.create({
            author: req.body.author,
            body: req.body.body
        })
        .then(function(results) {
            // res.redirect(307, "/api/login")
            res.end()
        })
        .catch(function(err) {
            res.status(401).json(err);
        })
    })
}

