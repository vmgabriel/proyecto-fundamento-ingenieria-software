var express = require("express");
var bodyParser = require("body-parser");
var Cotizante = require("./models/cotizante").Cotizante;
var app = express();

app.use("/public" ,express.static('public'));

app.use(bodyParser.json()); //Para peticiones application/json
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "jade");

app.get("/", function(req,res){
  res.render("index");
});

app.get("/register", function(req,res){
  res.render("register");
});

app.get("/login", function(req,res){
  User.find(function(err,doc){
    console.log(doc);
    res.render("login");
  });
});

app.post("/cotizante", function(req, res){
  let cotizante = new Cotizante({
    s_nombre: req.body.nombre,
    s_apellido: req.body.apellido,
    s_ciudad: req.body.ciudad,
    s_correo: req.body.email,
    s_pais: req.body.pais
  });

  cotizante.save(function(err){
    if (err)
    {
      console.log(String(err))
    }
    res.render("envio_correcto")
  });
});

app.listen(8080);
