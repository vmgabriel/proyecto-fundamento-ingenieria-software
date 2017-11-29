var express = require("express");

var Sucursal = require("./models/sucursal").Sucursal;
var Entrenador = require("./models/entrenador").Entrenador;
var Curso = require("./models/curso").Curso;
var Acudiente = require("./models/acudiente").Acudiente;
var Estudiante = require("./models/estudiante").Estudiante;
var Evento = require("./models/evento").Evento;
var Pago = require("./models/pago").Pago;
var Sesion = require("./models/sesion").Sesion;
var Reporte = require("./models/reporte").Reporte;
var Clase = require("./models/clase").Clase;
var Inscripcion = require("./models/inscripcion").Inscripcion;
var Torneo = require("./models/torneo").Torneo;

var router = express.Router();

router.get("/", function(req, res){
  Reporte.find({}, function (err, doc){
    Curso.find({}, function(err1, doc1){
      if (err || err1)
      {
        res.send("Error con la base de datos")
      }
      else {
        res.render("app/home", {reportes: doc, cursos: doc1});
      }
    });
  });
});

module.exports = router;
