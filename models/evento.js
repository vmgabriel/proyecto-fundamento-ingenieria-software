var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Evento_schema = new Schema({
  s_nombre: {type: String, required: "Nombre es Necesario"},
  d_fecha: {type: Date, required: "Fecha es Necesario"},
  s_direccion: {type: String, required: "Direccion es Necesario"},
  s_ciudad: {type: String, required: "Ciudad es Necesario"},
  s_pais: {type: String, required: "Pais es Necesario"},
  n_telefono: {type: String, required: "Telefono es necesario"}
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
