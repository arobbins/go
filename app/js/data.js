var Firebase = require('firebase');
var db = new Firebase('https://torid-heat-9003.firebaseIO.com');
var users = db.child("users");

var FirebaseTokenGenerator = require("firebase-token-generator");
var tokenGenerator = new FirebaseTokenGenerator("CnIRSny3kvqi60G0PiAIf8Jlp7jd4iVauAgEeMNd");

module.exports.db = db;
module.exports.users = users;
module.exports.tokenGenerator = tokenGenerator;