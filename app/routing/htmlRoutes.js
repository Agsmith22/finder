var path = require('path');

module.exports = function (app) {

	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});

	
	app.get("/list", function(req, res) {
		res.sendFile(__dirname, "./add.html")
	});

	
	app.use( function(req, res) {
  		res.sendFile(path.join(__dirname, "../public/home.html")); //need to change html
	});
}
