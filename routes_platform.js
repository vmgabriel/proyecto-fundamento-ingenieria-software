var express = require("express");

var Sucursal = require("./models/sucursal").Sucursal;
var Entrenador = require("./models/entrenador").Entrenador;
var Curso = require("./models/curso").Curso;
var Acudiente = require("./models/acudiente").Acudiente;

var router = express.Router();

router.get("/", function(req, res){
  res.render("platform/home");
});

router.get("/sucursal/new", function(req, res){
  res.render("platform/sucursal/new");
});

router.get("/entrenador/new", function(req, res){
  Sucursal.find({},function(err,doc){
    if (err)
    {
      console.log(err)
      res.redirec("platform/")
    }
    else
    {
      res.render("platform/entrenador/new",{sucursales:doc});
    }
  });
});

router.get("/curso/new", function(req, res){
  Entrenador.find({},function(err,doc){
    if (err)
    {
      console.log(err)
      res.redirec("platform/")
    }
    else
    {
      res.render("platform/curso/new",{entrenadores: doc});
    }
  })
});

router.get("/acudiente/new", function(req, res){
  Curso.find({},function(err, doc){
    if (err || !doc)
    {
      console.log(err)
      res.redirec("platform/")
    }
    else
    {
      res.render("platform/acudiente/new", {cursos:doc});
    }
  });
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
        res.send(err);
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
        s_sucursal: req.body.cbsucursal
      });

      entrenador.save().then(function(){
        res.redirect("/platform/entrenador/"+entrenador._id);
      },function(err){
        console.log(err);
        res.redirec("/platform");
      });
    }
    else {
      res.redirec("/platform");
    }
});

router.route("/curso")
  .get(function(req, res){
    Curso.find({},function(err, doc){
      if(err)
      {
        res.send(err);
      }
      else
      {
        res.render("platform/curso/index", {cursos: doc});
      }
    });
  })
  .post(function(req, res){
    let curso = new Curso({
      s_nombre: req.body.nombre,
      s_categoria: req.body.cbcategoria,
      s_descripcion: req.body.descripcion,
      n_precio: req.body.precio,
      s_telefono: req.body.telefono,
      s_entrenador: req.body.entrenador
    });

    curso.save().then(function(){
      res.redirect("/platform/curso/"+curso._id);
    },function(err){
      console.log(err);
      res.redirec("/platform");
    });
  });

router.route("/acudiente")
  .get(function(req, res){
    Acudiente.find({},function(err, doc){
      if (err || !doc)
      {
        console.log(err);
        res.redirec("/platform");
      }
      else
      {
        res.render("platform/acudiente/index", {acudientes: doc});
      }
    });
  }).post(function(req, res){
    if (req.body.contraseña == req.body.contraseñar)
    {
      let acudiente = new Acudiente({
        n_ced: req.body.cedula,
        s_nombre: req.body.nombre,
        d_fecha_nacimiento: req.body.fecha,
        s_apellido: req.body.apellido,
        s_comentarios: req.body.descripcion,
        s_correo: req.body.correo,
        s_creencia_religiosa: req.body.creencia,
        s_direccion: req.body.direccion,
        s_eps: req.body.eps,
        s_nombre_empresa: req.body.nombre_empresa,
        n_telefono: req.body.telefono,
        n_telefono_empresa: req.body.telefono_empresa,
        s_tipo_prestacionsocial: req.body.prestacion_social,
        s_pais: req.body.pais,
        s_tiposangre: req.body.cbtipo_sangre,
        s_usuario: req.body.usuario,
        s_contraseña: req.body.contraseña,
        s_curso: req.body.curso
      });
      acudiente.save().then(function(){
        res.redirec("platform/acudiente/"+acudiente._id);
      },function(err){
        console.log(err);
        res.redirec("/platform");
      });
    }
    else {
      console.log("Contraseña no es igual")
      res.redirec("platform/")
    }
  });

router.route("/sucursal/:id")
  .get(function(req, res){
    Sucursal.findById(req.params.id, function(err, doc){
      if (err)
      {
        console.log("Sucursal con ese ID no existe");
        res.redirec("platform/");
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



router.route("/entrenador/:id")
  .get(function(req, res){
    Entrenador.findById(req.params.id,function(err, doc){
      if (err)
      {
        res.redirec("platform/");
      }
      else
      {
        res.render("platform/entrenador/show",{entrenador:doc});
      }
    });
  });

router.route("/curso/:id")
  .get(function(req, res){
    Curso.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirec("platform/");
      }
      else
      {
        res.render("platform/curso/show",{curso:doc});
      }
    });
  });

router.route("/acudiente/:id")
  .get(function(req, res){
    Acudiente.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirec("platform/");
      }
      else
      {
        res.render("platform/acudiente/show",{acudiente:doc});
      }
    });
  });

module.exports = router;
