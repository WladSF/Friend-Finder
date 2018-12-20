//Load data from main database friends
//============================================
var friendsName = require("../Data/friends");
var newArray = [];


//Route
//============================================

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsName);
    });

    app.post("/api/friends", function (req, res) {
        for (var i = 0; i < req.body.scores.length; i++) {
            newArray.push(req.body.scores[i]);
        }
    });
};