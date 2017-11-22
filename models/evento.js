var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Evento_schema = new Schema({
  s_nombre: String,
  d_fecha: Date,
  s_direccion: String,
  s_ciudad: String,
  s_pais: String,
  s_telefono: String
});

var Evento = mongoose.model("Evento", Evento_schema);

module.exports.Evento = Evento;

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
