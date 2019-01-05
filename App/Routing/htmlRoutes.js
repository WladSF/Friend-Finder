//Dependencies
//=================================
var path = require("path");

//Routes / interacion with server
//=================================
module.exports = function (app) {

    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../Public/home.html"));
    });

    app.get("/survey", function (req, res) {
        console.log(path.join(__dirname, "../Public/survey.html"));
        res.sendFile(path.join(__dirname, "../Public/survey.html"));
    });

};
