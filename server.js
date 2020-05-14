// DEPENDENCIES
var express = require("express");
var session = require("express-session");
var passport = require("./config/passport");
// =====================================

// Sets up the Express app
var PORT = process.env.PORT || 8080;
var db = require("./models");
var app = express();
// =====================================

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json());
// =====================================

// Static directory
app.use(express.static("public"));
// =====================================

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
// =====================================


// Starts the server to begin Listening:
db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
    });
  });
// =====================================