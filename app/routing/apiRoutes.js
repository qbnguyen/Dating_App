
var matchProfile= require("../data/friends.js")

module.export = function(app){
app.get("/api/friends", function(req, res) {
    res.json(matchProfile);
  });


// app.post("/api/friends", function(req, res) {
    
//   });
}
 