module.exports = function() { 
	this.connection = require('mysql').createConnection({
                host : "www.sample.com",
                port : 3306,
                user : "user",
                password : "password",
                database : "database"
	});
};
