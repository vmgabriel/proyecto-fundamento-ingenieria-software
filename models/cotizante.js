var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/Pagina_FUTPRO',{ useMongoClient: true });

const prueba_email = [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/, "Email no valido"];

var Cotizante_schema = new Schema({
  s_nombre: {type: String, required: "El Nombre debe estar ingresado",
              maxlength: [50, "Nombre muy Grande"], minlength: [2, "Nombre muy Corto"]},
  s_apellido: {type: String, required: "El Apellido debe estar ingresado",
              maxlength: [50, "Apellido muy Grande"], minlength: [2, "Apellido muy Corto"]},
  s_ciudad: {type: String, required: "Es necesario el nombre de ciudad"},
  s_correo: {type: String, required: "Correo no Ingresado",
    match: prueba_email},
  s_pais: {type: String, required: "Es necesario el nombre del pais"}
});

var Cotizante = mongoose.model("Cotizante", Cotizante_schema);

module.exports.Cotizante = Cotizante;

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
