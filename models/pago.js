var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Pago_schema = new Schema({
  s_pago_banco: {type: String, required: "Ingrese pago de banco"},
  n_cantidad_pago: {type: Number, required: "Cantidad de pago es necesario"},
  n_codigo_pago: {type: Number, required: "Codigo del pago es necesario"},
  d_fecha_pago: {type: Date, requiered: "Fecha de pago es necesario"},
  s_tipo_pago: {type: String, required: "Tipo de pago es necesario"},
  i_estudiante: {type: Schema.Types.ObjectId, ref: "estudiante", required: "Estudiante es necesario"}
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
