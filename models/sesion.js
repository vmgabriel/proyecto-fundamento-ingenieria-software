var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const intensidad=["Alta", "Mediana", "Baja"];

var Sesion_schema = new Schema({
  s_descripcion_entrenamiento: String,
  d_fecha_entrenamiento_inicio: Date,
  d_fecha_entrenamiento_fin: Date,
  s_intensidad: String,
  s_ciudad: String,
  s_tipo_entrenamiento: String,
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
