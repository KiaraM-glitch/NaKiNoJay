// Dependencies
var db = require("../models")

var passport = require("../config/passport.js")

// Routes

module.exports = function(app) {
    // var pass = ""

    // let hashedPass = ""

    // app.get("/api/all", function(req, res) {
    //     wits_db.findAll({}).then(function(results) {
    //         res.json(results)
    //     })
    // })

    app.post("/api/signup", function(req, res) {
        

        // if (User.username = unique) {
        //     console.log("unique name")
        //   } else {
        //     console.log("not unique")
        //   }

        db.User.create({
            username: req.body.username,
            password: req.body.password
        })
            .then(function() {
                // res.redirect(307, "/api/login")
                console.log("Account Created")
            })
            .catch(function(err) {
                res.status(401).json(err);
            })





        // OLD CODE:
        // pass = req.body.password

        // bcrypt.hash(pass, 1, (err, hash) => {
        //     if (err) {
        //         console.log(err)
        //         return
        //     }

        //     hashedPass = hash

        //     accounts_db.create({
        //         username: req.body.username,
        //         password: hashedPass
        //     })

        //     .then(function() {
        //         console.log("new account made")
        //         // res.redirect(307, "/api/login")
        //     })

        //     .catch(function(err) {
        //         res.status(401).json(err);
        //     })
        // })
    })

    // app.post("/api/login", function(req, res) {
        
    // })
}

