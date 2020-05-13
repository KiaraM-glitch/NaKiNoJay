// DEPENDENCIES
var express = require("express");
// =====================================

// Sets up the Express app
var app = express();
var PORT = process.env.PORT || 8080;
// =====================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// =====================================

// Static directory
app.use(express.static("app/public"));
// =====================================

// Routes
require("./app/routes/api-routes.js")(app);
// =====================================

// Starts the server to begin Listening:
app.listen(PORT, function() {
    console.log("App Listening on Port: " + PORT);
});
// =====================================