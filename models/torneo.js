var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Torneo_schema = new Schema({
  id: Numeric,
  s_nombre: String,
  s_apellido: String,
  s_ciudad: String,
  s_correo: String,
  s_pais: String
});

var Torneo = mongoose.model("Torneo", Torneo_schema);

module.exports.Torneo = Torneo;

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
