var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Clase_schema = new Schema({
  s_clase_tipo: {type: String, required: "El tipo de clase es necesaria"},
  d_clase_caracteristica: {type: String, required: "La caracteristica de clase debe ser necesaria"},
  s_ciudad: {type: String, required: "Ciudad es necesaria"},
  i_sesion: {type: Schema.Types.ObjectId, ref: "sesion", required: "Sesion necesaria"},
  i_estudiante: {type: Schema.Types.ObjectId, ref: "estudiante", required: "Estudiante necesario"}
});

var Clase = mongoose.model("Clase", Clase_schema);

module.exports.Clase = Clase;

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
