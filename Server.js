//Dependencies : express and path
//======================================
var express = require("express");

//Sets up the express app
//======================================
var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Route
//======================================
require("./App/Routing/apiRoutes")(app);
require("./App/Routing/htmlRoutes")(app);

// Starts the server to begin listening
// =====================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});