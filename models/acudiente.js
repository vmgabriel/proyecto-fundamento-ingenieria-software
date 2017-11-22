var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const tipo_sangre=['A+', 'A-', 'O+', 'O-', 'B+', 'B-', 'AB+', 'AB-'];
const prueba_email = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Email no valido"];

var Acudiente_schema = new Schema({
  n_ced: {type: Number, required: "Cedula es un valor necesario"},
  s_nombre: {type: String, required: "Nombre es necesario"},
  d_fecha_nacimiento: {type: Date, required: "Fecha de Cumpleaños"},
  s_apellido: {type: String, required: "Apellido es necesario"},
  s_comentarios: String,
  s_correo: {type: String, required: "Correo Necesario",match: prueba_email},
  s_creencia_religiosa: String,
  s_direccion: {type: String, required: "Los datos de contacto son importantes"},
  s_eps: {type: String, required: "Datos Obligatorios"},
  s_nombre_empresa: {type: String, required: "Nombre de Empresa no Valida"},
  n_telefono: {type: Number, required: "Los datos de contacto son obligatorios"},
  n_telefono_empresa: {type: Number, required: "Los datos de contacto son obligatorios"},
  s_tipo_prestacionsocial: {type: String, required: "Datos de seguridad"},
  s_pais: {type: String, required: "Pais es necesario"},
  s_tiposangre: {type: String, required: "El tipo de sangre es un campo obligatorio"},
  s_usuario: {type: String, required: "Usuario no Ingresado"},
  s_contraseña: {type: String, required: "Contraseña no Ingresada"},
  s_curso: {type: Schema.Types.ObjectId, ref: "curso", required: "No se selecciono el curso vinculado"}
});

var Acudiente = mongoose.model("Acudiente", Acudiente_schema);

module.exports.Acudiente = Acudiente;

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
