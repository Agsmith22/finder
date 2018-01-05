var friends = require ('../data/friends.js');


// var newFriends = require ('../data/newFriends.js')

module.exports = function (app) {

    app.post('/api/survey', function (req, res) {

    	res.send({
  name: "antoine",
  photo: "",
  scores: [1,2,3,4,5,6,7,8,9,10]
});

      var newPerson = req.body
      var bestMatch = 10000;
      for (var i = 0; i < friends.length; i++) {
      	var afriend = friends[i].scores
      	var difference;
      	for (var i = 0; i < afriend.length; i++) {
      		afriend[i]
      		console.log(newPerson)
      		newPerson.scores[i]
      		difference += Math.abs(afriend[i] - newPerson.scores[i])
      	}
      if (difference < bestMatch) {
    		bestMatch = difference;
    		var newMatch = friends[i]
	  }

      }



    
    });

     app.get('/api/list', function (req, res) {
      res.json(friends);
    });
}

