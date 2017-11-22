var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const tipo_sangre=['A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-'];
const prueba_email = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Email no valido"];

var Estudiante_schema = new Schema({
  id: Numeric,
  n_nit: Number,
  n_cedula: Number,
  s_nombre: {type: String, required: "Nombre es Necesario"},
  s_apellido: {type: String, required: "Apellido es Necesario"},
  s_colegio: {type: String, required: "Colegio es Necesario"},
  s_correo: {type: String, required: "Correo Necesario", match: prueba_email},
  s_ciudad: {type: String, required: "Pais Necesario"},
  n_telefono: {type: String, required: "Telefono Necesario"},
  s_tiposangre: {type: String, required: "El tipo de sangre es un campo obligatorio"},
  s_enfermedades: String,
  d_fecha_nacimiento: {type: Date, required: "Fecha de Nacimiento es un campo Obligatorio"},
  s_alergias: String,
  i_acudiente: {type: Schema.Types.ObjectId, ref: "acudiente", required: "Acudiente es Necesario"}
});

var Estudiante = mongoose.model("Estudiante", Estudiante_schema);

module.exports.Estudiante = Estudiante;

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
