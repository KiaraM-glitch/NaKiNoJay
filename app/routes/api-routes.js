// Dependencies
var Wit = require("../models/script.js");



// Routes

module.exports = function(app) {
    app.get("/api/all", function(req, res) {
        Wit.findAll({}).then(function(results) {
            res.json(results)
        })
    })
}