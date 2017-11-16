var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");

var Cotizante = require("./models/cotizante").Cotizante;
var Entrenador = require("./models/entrenador").Entrenador;
var Sucursal = require("./models/sucursal").Sucursal;
var Acudiente = require("./models/acudiente").Acudiente;

var router_platform = require("./routes_platform");
var router_app = require("./routes_app");
var session_middleware = require("./middlewares/session");
var session_acudiente = require("./middlewares/session_acudiente")
var session_entrenador = require("./middlewares/session_entrenador")

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

app.use("/app", session_middleware);//Un especie de guarda en spaggueti
app.use("/app", session_acudiente);//Un especie de guarda en spaggueti
app.use("/app", router_app);

app.use("/platform", session_middleware);//Un especie de guarda en spaggueti
app.use("/platform", session_entrenador);//Un especie de guarda en spaggueti
app.use("/platform", router_platform);

app.set("view engine", "jade");
app.set('views',__dirname+'/views');

app.get("/", function(req,res){
  res.render("index");
});

app.get("/register", function(req,res){
  res.render("register");
});

app.get("/login", function(req,res){
  console.log()
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
  Entrenador.findOne({"s_usuario": req.body.usuario,
    "s_contraseña": req.body.password}).exec (function(err, docs){
      if (err){
        res.serverError(err);
      }
      if (docs) {
        req.session.user_id = docs._id;
        req.session.rol = 1;
        res.redirect("/platform");
      }
      else {
        Acudiente.findOne({"s_usuario": req.body.usuario,
          "s_contraseña": req.body.password}).exec (function(erracu, docsacu){
          if (erracu){
            res.serverError(erracu);
          }
          else if (docsacu) {
            req.session.user_id = docsacu._id;
            req.session.rol = 2;
            res.redirect("/app");
          }
          else {
            res.send("Error de logeo");
          }
        });
      }
    });
});

/*
app.use("/app", session_middleware);//Un especie de guarda en spaggueti
app.use("/app", session_acudiente);//Un especie de guarda en spaggueti
app.use("/app", router_app);

app.use("/platform", session_middleware);//Un especie de guarda en spaggueti
app.use("/platform", session_entrenador);//Un especie de guarda en spaggueti
app.use("/platform", router_platform);
*/
app.listen(8080, function(){
  console.log("Servidor Corriendo en puerto 8080");
  console.log("ingresa a http://localhost:8080");
});
