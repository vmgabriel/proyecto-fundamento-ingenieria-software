var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Sucursal_schema = new Schema({
  s_nombre: {type: String, required: "Campo Obligatorio"},
  s_direccion: {type: String, required: "Direccion Necesiria"},
  i_cantidadCategorias: {type: Number, required: "Cantidad Necesaria"},
  s_ciudad: {type: String, required: "Nombre de la Ciudad Necesario"}
});

var Sucursal = mongoose.model("Sucursal", Sucursal_schema);

module.exports.Sucursal = Sucursal;

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
