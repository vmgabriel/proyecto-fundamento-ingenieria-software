var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Pago_schema = new Schema({
  id: Numeric,
  s_nombre: String,
  s_apellido: String,
  s_ciudad: String,
  s_correo: String,
  s_pais: String
});

var Pago = mongoose.model("Pago", Pago_schema);

module.exports.Pago = Pago;

/*
String
Number
Date
Boolean
Objectid
*/
