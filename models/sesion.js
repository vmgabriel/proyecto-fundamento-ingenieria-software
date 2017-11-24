var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const intensidad=["Alta", "Mediana", "Baja"];

var Sesion_schema = new Schema({
  s_descripcion_entrenamiento: {type: String, required: "Descripcion Necesaria"},
  d_fecha_entrenamiento_inicio: {type: Date, required: "Fecha Inicio Necesario"},
  d_fecha_entrenamiento_fin: {type: Date, required: "Fecha Fin Necesario"},
  s_intensidad: {type: String, required: "Intensidad es Necesario"},
  s_ciudad: {type: String, required: "Ciudad es Necesario"},
  s_tipo_entrenamiento: {type: String, required: "Tipo de Entrenamiento es Necesario"}
});

var Sesion = mongoose.model("Sesion", Sesion_schema);

module.exports.Sesion = Sesion;

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
