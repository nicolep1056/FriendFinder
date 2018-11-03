var path = require("path")
var friends = require('../data/friends');





    module.exports = function (app) {

        app.get('/api/friends', function (req, res) {
            res.json(friends);
        });

        app.post('/api/friends', function (req, res) {

            var newFriendScores = req.body.scores;
            var scoresArray = [];
            var bestMatch = 0;

            for (var i = 0; i < friends.length; i++) {
                var scoresDiff = 0;

                for (var j = 0; j < newFriendScores.length; j++) {
                    scoresDiff += (Math.abs(parseInt(friends[i].scores[j]) - parseInt(newFriendScores[j])));
                }

                scoresArray.push(scoresDiff);
            }

            for (var i = 0; i < scoresArray.length; i++) {
                if (scoresArray[i] <= scoresArray[bestMatch]) {
                    bestMatch = i;
                }
            }

            var bestFriendMatch = friends[bestMatch];

            console.log(bestFriendMatch);

            friends.push(req.body);
            res.json(bestFriendMatch);
        });
    };
