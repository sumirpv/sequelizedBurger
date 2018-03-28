var express = require("express");
var bodyParser = require("body-parser");
var db = require("./models");
// Set Handlebars.
var exphbs = require("express-handlebars");

var app = express();
var PORT = process.env.PORT || 8080;

// Static directory
app.use(express.static("./public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());






app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
 require("./controllers/burgers_controllers.js")(app);
 require("./controllers/html-routes.js")(app);





db.sequelize.sync().then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });
  