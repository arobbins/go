var Firebase = require('firebase');
var db = new Firebase('https://torid-heat-9003.firebaseIO.com');
var users = db.child("users");

module.exports.db = db;
module.exports.users = users;