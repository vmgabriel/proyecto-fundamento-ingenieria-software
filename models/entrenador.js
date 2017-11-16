var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Entrenador_schema = new Schema({
  id: Number,
  s_nombre: String,
  s_apellido: String,
  s_ciudad: String,
  s_correo: String,
  s_pais: String
});

var Entrenador = mongoose.model("Entrenador", Entrenador_schema);

module.exports.Entrenador = Entrenador;

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
