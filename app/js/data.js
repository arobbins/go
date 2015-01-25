var Firebase = require('firebase');
var DB = new Firebase('https://torid-heat-9003.firebaseIO.com');
var USERS = DB.child("users");

module.exports = {
	DB: DB,
	USERS: USERS
}