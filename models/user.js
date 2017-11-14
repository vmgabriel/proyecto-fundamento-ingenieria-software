var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina',{ useMongoClient: true });

var user_schema = new Schema({
  name: String,
  user: String
});

user_schema.virtual("password_confirmation").get(function() {
  return this.p_c;
}).set(function(password) {
  this.p_c = password;
});

var User = mongoose.model("User", user_schema);

module.exports.User = User;

/*
String
Number
Date
Buffer
Boolean
Mixed
Objectid
Array
*/
