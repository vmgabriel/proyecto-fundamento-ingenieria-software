var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Pago_schema = new Schema({
  s_pago_banco: {type: String, required: "Ingrese pago de banco"},
  n_cantidad_pago: {type: Number, required: "Cantidad de pago es necesario"},
  d_fecha_maxima_pago: {type: Date, requiered: "Fecha de pago es necesario"},
  s_tipo_pago: {type: String, required: "Tipo de pago es necesario"},
  s_descripcion: {type: String, required: "Descripcion es Necesaria"},
  i_curso: {type: Schema.Types.ObjectId, ref: "curso", required: "Curso es necesario"}
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
