//Load data from main database friends
//============================================
var friendsName = require("../Data/friends");

console.log(friendsName);
//Route
//============================================

module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friendsName);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        };

        var userInfo = req.body;
        var userScores = userInfo.scores;
        var totalDifference;

        for (var i = 0; i < friendsName.length; i++) {
            var currentFriend = friendsName[i];
            totalDifference = 0;

            console.log(currentFriend.name);
            console.log(currentFriend.photo);


            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
            
        }
        friendsName.push(userInfo);

        res.json(bestMatch);

    });
};