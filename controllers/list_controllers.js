//require express and models, create router
var express = require("express");
var router = express.Router();
var task = require("../models/list_models.js");

//default path
router.get("/", function(req, res) {
	res.redirect("/list");
});

//get full list - load all items using index handlebars page
router.get("/list", function(req, res) {
	task.all(function(data) {
		var hbsObject = {toDoList: data};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

//if user creates a new task
router.post("/list/create", function (req, res) {
	task.create(["itemName", "isDone"], [req.body.itemName, req.body.isDone], function() {
		res.redirect("/list");
	});
});

//if user changes a task to done
router.post("/list/update/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition, " + condition);

	task.update({isDone: req.body.isDone}, condition, function() {
		res.redirect("/list");
	});
});

module.exports = router;