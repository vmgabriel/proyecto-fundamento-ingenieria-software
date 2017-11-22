var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Torneo_schema = new Schema({
  s_nombre: {type: String, required: "Nombre del torneo es necesario"},
  d_fecha_torneo: {type: Date, required: "Fecha es necesaria"},
  s_ranking_torneo: {type: String, required: "Ranking es necesario"},
  s_ciudad: {type: String, required: "Ciudad es Necesaria"},
  s_pais: {type: String, required: "Pais es Necesario"},
  s_puesto_torneo: {type: String, required: "Puesto es Necesario"},
  i_estudiante: {type: Schema.Types.ObjectId, ref: "estudiante", required: "Estudiante es necesario"}
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
