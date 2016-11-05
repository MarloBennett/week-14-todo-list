//require connection to mysql db
var connection = require("../config/connection.js");

var orm = {

	//select all tasks
	selectAll: function(cb) {
		var queryString = "SELECT * FROM toDoList";
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	//add a task
	insertOne: function(newItem, cb) {
		var queryString = "INSERT INTO toDoList (itemName, isDone) VALUES (" + newItem + ", " + false + ");";
		console.log(queryString);
		connection.query(queryString, newItem, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},

	//update a task
	updateOne: function(condition, cb) {
		var queryString = "UPDATE toDoList SET isDONE = " + true + " WHERE " + condition;
		console.log(queryString);
		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	}
};


//make exportable
module.exports = orm;
