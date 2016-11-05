//require orm
var orm = require("../config/orm.js");

var task = {

	all: function(cb) {
		orm.all("toDoList", function(res) {
			cb(res);
		});
	},

	create: function(columns, values, cb) {
		orm.create("toDoList", columns, values, function(res) {
			cb(res);
		});
	},

	update: function(objColVals, condition, cb) {
		orm.update("toDoList", objColVals, condition, function(res) {
			cb(res);
		});
	}
};

//make exportable
module.exports = task;