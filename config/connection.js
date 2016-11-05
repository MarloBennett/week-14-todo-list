//connect to mysql database and make exportable
var mysql = require("mysql");
var connection = mysql.createConnection({
	port: 3000,
	host: "localhost",
	user: "marlo",
	password: "marlosql",
	database: "toDoList_db"
});

connection.connect(function (err) {
	if (err) {
		console.error('error connecting: ' + err.stack);
		return;
	}
	console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
