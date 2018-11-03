var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
/* app.use(bodyParser.text());
 *//* app.use(bodyParser.json({ type: "application/vnd.api+json" })); */

app.use(express.static(path.join(__dirname, "/app/public")));

/* require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app); */

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(port, function() {
    console.log("listening on port http://localhost:8000: " + port);
  });
