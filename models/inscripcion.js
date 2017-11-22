var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Inscripcion_schema = new Schema({
  s_tipo: {type: String, required: "Tipo es necesario"},
  s_fecha: {type: String, required: "Fecha es necesaria"},
  s_viabilidad: {type: String, required: "Viabilidad es necesaria"},
  s_direccion: {type: String, required: "Direccion es necesaria"},
  s_ciudad: {type: String, required: "Ciudad es necesaria"},
  i_evento: {type: Schema.Types.ObjectId, ref: "evento", required: "Evento es necesario"},
  i_estudiante: {type: Schema.Types.ObjectId, ref: "estudiante", required: "Estudiante es necesario"}
});

var Inscripcion = mongoose.model("Inscripcion", Inscripcion_schema);

module.exports.Inscripcion = Inscripcion;

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
