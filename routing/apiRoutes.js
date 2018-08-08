let surveyData = require("../data/friends");


module.exports = function(app) {
  
    //GET REQUESTS//
    app.get("/api/friends", function(req, res) {
        res.json(surveyData);
    });
    
    
    //POST REQUESTS//
    app.post("/api/submit", function(req, res) {
      console.log(surveyData);
      surveyData.push(req.body);
    });
  
    app.post("/api/clear", function() {
      // Empty out the arrays of data
      surveyData = [];  
      console.log(surveyData);
    });

  };