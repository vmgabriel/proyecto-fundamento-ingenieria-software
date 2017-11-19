var express = require("express");

var Sucursal = require("./models/sucursal").Sucursal;
var Entrenador = require("./models/entrenador").Entrenador;

var router = express.Router();

router.get("/", function(req, res){
  res.render("platform/home");
});

router.get("/sucursal/new", function(req, res){
  res.render("platform/sucursal/new");
});

router.get("/entrenador/new", function(req, res){
  res.render("platform/entrenador/new");
});

router.get("/curso/new", function(req, res){
  res.render("platform/curso/new");
});

router.get("/acudiente/new", function(req, res){
  res.render("platform/acudiente/new");
});

router.route("/sucursal")
  .get(function(req, res){
    Sucursal.find({},function(err, doc)
    {
      if (err)
      {
        res.send(err)
      }
      else
      {
        res.render("platform/sucursal/index", { sucursales: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_nombre: req.body.nombre,
      s_direccion: req.body.direccion,
      i_cantidadCategorias: req.body.categorias,
      s_ciudad: req.body.ciudad
    };

    let sucu = new Sucursal(datos);

    sucu.save().then(function(){
      res.redirect("/platform/sucursal/"+sucu._id);
    }, function(err){
      console.log(String(err));
    });
});

router.route("/entrenador")
  .get(function(req, res){
    Entrenador.find({},function(err, doc)
    {
      if (err)
      {
        res.send(err)
      }
      else
      {
        res.render("platform/entrenador/index", { entrenadores: doc});
      }
    });
  })
  .post(function(req,res){
    if (req.body.contraseña == req.body.contraseña)
    {
      let entrenador = new Entrenador({
        n_ced: req.body.cedula,
        s_usuario: req.body.usuario,
        s_nombre: req.body.nombre,
        s_apellido: req.body.apellido,
        s_descripcion: req.body.descripcion,
        s_correo: req.body.correo,
        n_telefono: req.body.telefono,
        s_contraseña: req.body.contraseña,
        s_sucursal: ""
      });
    }
    else {
      res.redirec("/platform");
    }
});

router.route("/curso")
  .get(function(req, res){
    res.render("platform/curso/new");
  });

router.route("/acudiente")
  .get(function(req, res){
    res.render("platform/acudiente/new");
  });

router.route("/sucursal/:id")
  .get(function(req, res){
    Sucursal.findById(req.params.id, function(err, doc){
      if (err)
      {
        res.redirec("platform/")
      }
      else {
        res.render("platform/sucursal/show",{sucursal:doc});
      }
    });
})
/*
  .post(function(req, res){
    let sucursal = new Sucursal({
      s_nombre: req.body.nombre,
      s_direccion: req.body.direccion,
      i_cantidadCategorias: req.body.categorias,
      s_ciudad: req.body.ciudad
  });
  sucursal.save().then(function(){
    res.render("platform/envio_correcto");
  }, function(err){
    console.log(String(err));
  });
})*/;

module.exports = router;
