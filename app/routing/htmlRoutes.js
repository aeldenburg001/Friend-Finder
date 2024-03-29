var path = require("path");

module.exports = function(app) {
	// serves the survey HTML file
	app.get("/survey", function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/survey.html"));
	});

	// route for homepage
	app.use(function(req, res) {
		res.sendFile(path.join(__dirname, "/../public/home.html"));
	});
};