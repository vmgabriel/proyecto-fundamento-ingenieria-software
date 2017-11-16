var express = require("express");
var bodyParser = require("body-parser");
var Cotizante = require("./models/cotizante").Cotizante;
var Entrenador = require("./models/entrenador").Entrenador;
var Sucursal = require("./models/sucursal").Sucursal;
var session = require("express-session");

var app = express();

app.use("/public" ,express.static('public'));

app.use(bodyParser.json()); //Para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));

//Define el comportamiento de las sesiones
app.use(session({
  secret: "12hhjd345mmmhdj4ksas",
  resave: false,
  saveUninitialized: false
}));

app.set("view engine", "jade");

app.get("/", function(req,res){
  console.log(req.session.user_id);
  res.render("index");
});

app.get("/register", function(req,res){
  res.render("register");
});

app.get("/login", function(req,res){
  res.render("login");
});

app.post("/cotizante", function(req, res){
  let cotizante = new Cotizante({
    s_nombre: req.body.nombre,
    s_apellido: req.body.apellido,
    s_ciudad: req.body.ciudad,
    s_correo: req.body.email,
    s_pais: req.body.pais
  });

  //PROMESAS
  cotizante.save().then(function(){
    res.render("envio_correcto");
  }, function(err){
    console.log(String(err));
  });
});

app.post("/sesion", function(req, res){
  Entrenador.findOne({"s_usuario": req.body.usuario, "s_contraseña": req.body.password}).exec (function(err, docs){
      if (err){
        res.serverError(err);
      }
      if (!docs) {
        res.send('No se encuentra D:');
      }
      else {
        req.session.user_id = docs._id;
        res.send("Sesion Iniciada, bienvenido " + String(docs.s_nombre));
      }
    });

});

app.listen(8080);
