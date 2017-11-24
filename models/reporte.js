var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

var Reporte_schema = new Schema({
  s_reporte_banco: {type: String, required: "Ingrese reporte de banco"},
  n_cantidad_reporte: {type: Number, required: "Cantidad de reporte es necesario"},
  n_codigo_reporte: {type: String, required: "Codigo del reporte es necesario"},
  d_fecha_reporte: {type: Date, requiered: "Fecha de reporte es necesario"},
  s_tipo_reporte: {type: String, required: "Tipo de reporte es necesario"},
  i_pago: {type: Schema.Types.ObjectId, ref: "pago", required: "Pago es necesario"}
});

var reporte = mongoose.model("Reporte", Reporte_schema);

module.exports.Reporte = reporte;

/*
String
Number
Date
Boolean
Objectid
*/
