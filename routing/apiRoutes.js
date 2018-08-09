let surveyData = require("../data/friends");


module.exports = function (app) {

  //GET REQUESTS//
  //*************/
  app.get("/api/friends", function (req, res) {
    res.json(surveyData);
  });


  //POST REQUESTS//
  //**************/
  app.post("/api/submit", function (req, res) {
    let newFriend = req.body;
    //CONVERT STRING NUM SCORES INTO NUM SCORES:
    let strScores = req.body.scores;
    let scores = strScores.map(score => Number(score));
    //SET NEWFRIEND OBJECT SCORES TO NUM SCORES:
    newFriend.scores = scores;
    //PUSH NEWFRIEND ONTO SURVEYDATA:
    surveyData.push(newFriend);
    console.log(surveyData);
  });

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    surveyData = [];
    console.log(surveyData);
  });

};