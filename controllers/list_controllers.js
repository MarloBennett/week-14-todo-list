var express = require("express");
var router = express.Router();
var task = require("../models/list_models.js");

router.get("/", function(req, res) {
	res.redirect("/list");
});

router.get("/list", function(req, res) {
	task.selectAll(function(data) {
		var hbsObject = {toDoList:data};
		console.log(hbsObject);
		res.render("index", hbsObject);
	});
});

router.post("/list/create", function (req, res) {
	task.insertOne("newItem", req.body.newItem, function() {
		res.redirect("/list");
	});
});

router.put("/list/update/:id", function(req, res) {
	var condition = "id = " + req.params.id;

	console.log("condition, " + condition);

	task.updateOne(condition, function() {
		res.redirect("/list");
	});
});

module.exports = router;