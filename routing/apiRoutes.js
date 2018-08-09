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
    let incomingStrScores = req.body.scores;
    let incomingScores = incomingStrScores.map(score => Number(score));
    newFriend.scores = incomingScores;

    // IDENTIFY THE CLOSEST MATCH FOR NEWFRIEND AND SEND IT BACK:
    let resultsArray = [];
    surveyData.forEach(function(friend) {  
      let magicNumber = 0;
      for(let i = 0; i < friend.scores.length; i++) {
        magicNumber += Math.abs(incomingScores[i] - friend.scores[i]);
      }
      resultsArray.push(magicNumber);
    })
    console.log(resultsArray);

    //PUSH NEWFRIEND ONTO SURVEYDATA:
    surveyData.push(newFriend);
    //SEND BACK OBJECT FOR MATCHING FRIEND (survey.html will deal with the response it receives):
    res.json(newFriend);
  });

  app.post("/api/clear", function () {
    // Empty out the arrays of data
    surveyData = [];
    console.log(surveyData);
  });

};