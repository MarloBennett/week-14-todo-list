//require orm
var orm = require("../config/orm.js");

var task = {

	selectAll: function(cb) {
		orm.selectAll("toDoList", function(res) {
			cb(res);
		});
	},

	insertOne: function(newItem, cb) {
		orm.insertOne("toDoList", newItem, function(res) {
			cb(res);
		});
	},

	updateOne: function(condition, cb) {
		orm.updateOne("toDoList", condition, function(res) {
			cb(res);
		});
	}
};

//make exportable
module.exports = task;