//require orm
var orm = require("../config/orm.js");

var task = {

//model to get all items from todolist table
	all: function(cb) {
		orm.all("toDoList", function(res) {
			cb(res);
		});
	},

//model for new task creation
	create: function(columns, values, cb) {
		orm.create("toDoList", columns, values, function(res) {
			cb(res);
		});
	},

//model for udating task
	update: function(objColVals, condition, cb) {
		orm.update("toDoList", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

//make exportable
module.exports = task;