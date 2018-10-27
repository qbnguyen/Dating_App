
var allFriends= require("../data/friends.js")

module.exports = function(app){

app.get("/api/friends", function(req, res) {
    res.json(allFriends);
  });


app.post("/api/friends", function(req, res) {
    var userData = req.body
    console.log(userData);
    var userScores = userData.Scores;
    var bestScore = 100;
    var index = -1;

    for (var i = 0; i< allFriends.length; i++){
      
      var friendScores = allFriends[i].Scores;
      var total = 0;
      for (var j = 0; j<10 ; j++){
       
        var userScore = userScores[j];
        var friendScore = friendScores[j];
        var difference = userScore - friendScore;
        var diffabs = Math.abs(difference);
        total += diffabs;
      }
      console.log("total", total, index)
      if (total < bestScore){
        bestScore = total;
        index = i;
      }
    }
    console.log("i", i)
    res.json(allFriends[index]);
  });
}
 