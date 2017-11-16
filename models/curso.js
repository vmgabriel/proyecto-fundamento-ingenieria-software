var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const prueba_email = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Email no valido"];
const maxima_cedula = [99999999999, "El valor debe ser menor al ingresado"]

var Entrenador_schema = new Schema({
  n_ced: {type: Number, required: "Cedula es Necesaria", max: maxima_cedula },
  s_usuario: {type: String, requiered "Usuario No Ingresado"},
  s_nombre: {type:String, required: "Nombre No Ingresado"},
  s_apellido: {type: String, required: "Apellido Necesario"},
  s_descripcion: String,
  s_correo: {type: String, required: "Necesario Ingresar Correo", match: prueba_email},
  s_telefono: {type: Number, required: "Necesario Numero de Contacto"},
  s_contraseña: {type: String, required: "Necesaria Contraseña"},
  n_sucursal: {type: Number, required: "Sucursal es un Campo Obligatorio de Seleccion"}
});

var Entrenador = mongoose.model("Entrenador", Entrenador_schema);

module.exports.Entrenador = Entrenador;

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
