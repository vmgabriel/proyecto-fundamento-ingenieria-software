var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const posibles_valores = ['sub-11', 'sub-15', 'sub-20'. 'profesional'];

var Curso_schema = new Schema({
  s_nombre: {type:String, required: "Nombre No Ingresado"},
  s_categoria: {type: String, enum: {values: posibles_valores, message: "Opcion no valida"}},
  s_descripcion: String,
  n_precio: {type: Number, required: "Valor es necesario"}
  s_telefono: {type: Number, required: "Necesario Numero de Contacto"},
  s_entrenador: {type: Object, required: "Entrenador es Necerio"}
});

var Curso = mongoose.model("Curso", Curso_schema);

module.exports.Curso = Curso;

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
