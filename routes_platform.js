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
      res.redirect("platform/")
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
      res.redirect("platform/")
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
      res.redirect("platform/")
    }
    else
    {
      res.render("platform/acudiente/new", {cursos:doc});
    }
  });
});

router.get("/estudiante/new", function(req, res){
  Acudiente.find({},function(err, doc){
    if (err || !doc)
    {
      console.log(err)
      res.redirect("platform/")
    }
    else
    {
      res.render("platform/estudiante/new", {acudientes:doc});
    }
  });
});

router.get("/evento/new", function(req, res){
  res.render("platform/evento/new");
});

router.get("/pago/new", function(req, res){
  Curso.find({},function(err, doc){
    if (err || !doc)
    {
      console.log(err)
      res.redirect("platform/")
    }
    else
    {
      res.render("platform/pago/new", {cursos:doc});
    }
  });
});

router.get("/sesion/new", function(req, res){
  res.render("platform/sesion/new");
});

router.get("/reporte/new", function(req, res){
  Pago.find({},function(err, doc){
    if (err || !doc)
    {
      console.log(err)
      res.redirect("platform/")
    }
    else
    {
      res.render("platform/reporte/new", {pagos:doc});
    }
  });
});

router.get("/clase/new", function(req, res){
  let sesioness = []
  Sesion.find({},function(err, ssesiones){
    if (err || !ssesiones)
    {
      console.log(err);
      res.redirect("platform/");
    }
    else
    {
      sesioness=ssesiones;
    }
    });
    Estudiante.find({},function(err1, eestudiantes){
      if (err1 || !eestudiantes)
      {
        console.log(err1);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/clase/new", {sesiones:sesioness, estudiantes:eestudiantes});
      }
    });
});

router.get("/inscripcion/new", function(req, res){
  let eventoss = []
  Evento.find({},function(err, eeventos){
    if (err || !eeventos)
    {
      console.log(err);
      res.redirect("platform/");
    }
    else
    {
      eventoss=eeventos;
    }
    });
    Estudiante.find({},function(err1, eestudiantes){
      if (err1 || !eestudiantes)
      {
        console.log(err1);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/inscripcion/new", {eventos:eventoss, estudiantes:eestudiantes});
      }
    });
});

router.get("/torneo/new", function(req, res){
  Estudiante.find({},function(err,doc){
    if (err)
    {
      console.log(err)
      res.redirect("platform/")
    }
    else
    {
      res.render("platform/torneo/new",{estudiantes:doc});
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
        res.redirect("/platform");
      });
    }
    else {
      res.redirect("/platform");
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
      res.redirect("/platform");
    });
  });

router.route("/acudiente")
  .get(function(req, res){
    Acudiente.find({},function(err, doc){
      if (err || !doc)
      {
        console.log(err);
        res.redirect("/platform");
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
        res.redirect("/platform/acudiente/"+acudiente._id);
      },function(err){
        console.log(err);
        res.redirect("/platform");
      });
    }
    else {
      console.log("Contraseña no es igual")
      res.redirect("platform/")
    }
  });

router.route("/estudiante")
  .get(function(req, res){
    Estudiante.find({},function(err, doc){
      if (err || !doc)
      {
        console.log(err);
        res.redirect("/platform");
      }
      else
      {
        res.render("platform/estudiante/index", {estudiantes: doc});
      }
    });
  }).post(function(req, res){
    let estudiante = new Estudiante({
      n_nit: req.body.nit,
      n_cedula: req.body.cedula,
      s_nombre: req.body.nombre,
      s_apellido: req.body.apellido,
      s_colegio: req.body.colegio,
      s_correo: req.body.correo,
      s_ciudad: req.body.ciudad,
      n_telefono: req.body.telefono,
      s_tiposangre: req.body.cbtipo_sangre,
      s_enfermedades: req.body.enfermedad,
      d_fecha_nacimiento: req.body.fecha,
      s_alergias: req.body.alergias,
      i_acudiente: req.body.acudiente
    });

    estudiante.save().then(function(){
      res.redirect("/platform/estudiante/"+estudiante._id);
    },function(err){
      console.log(err);
      res.redirect("/platform");
    });
  });

router.route("/evento")
  .get(function(req, res){
    Evento.find({},function(err, doc)
    {
      if (err)
      {
        res.send(err)
      }
      else
      {
        res.render("platform/evento/index", {eventos: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_nombre: req.body.nombre,
      d_fecha: req.body.fecha,
      s_direccion: req.body.direccion,
      s_ciudad: req.body.ciudad,
      s_pais: req.body.pais,
      n_telefono: req.body.telefono
    };

    let eve = new Evento(datos);

    eve.save().then(function(){
      res.redirect("/platform/evento/"+eve._id);
    }, function(err){
      console.log(String(err));
    });
});

router.route("/pago")
  .get(function(req, res){
    Pago.find({},function(err, doc)
    {
      if (err)
      {
        res.send(err)
      }
      else
      {
        res.render("platform/pago/index", {pagos: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_pago_banco: req.body.pago,
      n_cantidad_pago: req.body.cantidad,
      d_fecha_maxima_pago: req.body.fecha,
      s_tipo_pago: req.body.tipo_pago,
      s_descripcion: req.body.descripcion,
      i_curso: req.body.curso
    };

    console.log(req.body.fecha);

    let pago = new Pago(datos);

    pago.save().then(function(){
      res.redirect("/platform/pago/"+pago._id);
    }, function(err){
      console.log(String(err));
    });
});

router.route("/sesion")
  .get(function(req, res){
    Sesion.find({},function(err, doc)
    {
      if (err)
      {
        res.send(err)
      }
      else
      {
        res.render("platform/sesion/index", { sesiones: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_descripcion_entrenamiento: req.body.descripcion,
      d_fecha_entrenamiento_inicio: req.body.fecha_inicio,
      d_fecha_entrenamiento_fin: req.body.fecha_fin,
      s_intensidad: req.body.cbintensidad,
      s_ciudad: req.body.ciudad,
      s_tipo_entrenamiento: req.body.tipo
    };

    let sesion = new Sesion(datos);

    sesion.save().then(function(){
      res.redirect("/platform/sesion/"+sesion._id);
    }, function(err){
      console.log(String(err));
    });
});

router.route("/reporte")
  .get(function(req, res){
    Reporte.find({},function(err, doc)
    {
      if (err)
      {
        res.send(err)
      }
      else
      {
        res.render("platform/reporte/index", { reportes: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_reporte_banco: req.body.nombre_banco,
      n_cantidad_reporte: req.body.cantidad,
      n_codigo_reporte: req.body.cod_reporte,
      d_fecha_reporte: req.body.fecha,
      s_tipo_reporte: req.body.tipo_reporte,
      i_pago: req.body.pago
    };

    let reporte = new Reporte(datos);

    reporte.save().then(function(){
      res.redirect("/platform/reporte/"+reporte._id);
    }, function(err){
      console.log(String(err));
    });
});

router.route("/clase")
  .get(function(req, res){
    Clase.find({},function(err, doc)
    {
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/clase/index", { clases: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_clase_tipo: req.body.tipo_clase,
      d_clase_caracteristica: req.body.caracteristica,
      s_ciudad: req.body.ciudad,
      i_sesion: req.body.sesion,
      i_estudiante: req.body.estudiante
    };

    let clase = new Clase(datos);

    clase.save().then(function(){
      res.redirect("/platform/clase/"+clase._id);
    }, function(err){
      console.log(String(err));
    });
});

router.route("/inscripcion")
  .get(function(req, res){
    Inscripcion.find({},function(err, doc)
    {
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/inscripcion/index", {inscripciones: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_tipo: req.body.tipo,
      s_fecha: req.body.fecha,
      s_viabilidad: req.body.viabilidad,
      s_direccion: req.body.direccion,
      s_ciudad: req.body.ciudad,
      i_evento: req.body.evento,
      i_estudiante: req.body.estudiante
    };

    let inscrip = new Inscripcion(datos);

    inscrip.save().then(function(){
      res.redirect("/platform/inscripcion/"+inscrip._id);
    }, function(err){
      console.log(String(err));
      res.redirect("platform/");
    });
});

router.route("/torneo")
  .get(function(req, res){
    Torneo.find({},function(err, doc)
    {
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/torneo/index", {torneos: doc});
      }
    });
})
  .post(function(req, res){
    let datos = {
      s_nombre: req.body.nombre,
      d_fecha_torneo: req.body.fecha,
      s_ranking_torneo: req.body.ranking,
      s_ciudad: req.body.ciudad,
      s_pais: req.body.pais,
      s_puesto_torneo: req.body.puesto,
      i_estudiante: req.body.estudiante
    };

    let torneo = new Torneo(datos);

    torneo.save().then(function(){
      res.redirect("/platform/torneo/"+torneo._id);
    }, function(err){
      console.log(String(err));
      res.redirect("platform/");
    });
});

router.route("/sucursal/:id")
  .get(function(req, res){
    Sucursal.findById(req.params.id, function(err, doc){
      if (err)
      {
        console.log("Sucursal con ese ID no existe");
        res.redirect("platform/");
      }
      else {
        res.render("platform/sucursal/show",{sucursal:doc});
      }
    });
});

router.route("/entrenador/:id")
  .get(function(req, res){
    Entrenador.findById(req.params.id,function(err, doc){
      if (err)
      {
        res.redirect("platform/");
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
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/curso/show",{curso:doc});
      }
    });
  });

router.route("/acudiente/:id")
  .put(function(req, res){
    Acudiente.findById(req.params.id,function(err, acudiente){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        if (req.body.constraseña == req.body.rcontraseña)
        {
          acudiente.n_ced = req.body.cedula,
          acudiente.s_nombre = req.body.nombre,
          acudiente.d_fecha_nacimiento = req.body.fecha,
          acudiente.s_apellido = req.body.apellido,
          acudiente.s_comentarios = req.body.descripcion,
          acudiente.s_correo = req.body.correo,
          acudiente.s_creencia_religiosa = req.body.creencia,
          acudiente.s_direccion = req.body.direccion,
          acudiente.s_eps = req.body.eps,
          acudiente.s_nombre_empresa = req.body.nombre_empresa,
          acudiente.n_telefono = req.body.telefono,
          acudiente.n_telefono_empresa = req.body.telefono_empresa,
          acudiente.s_tipo_prestacionsocial = req.body.prestacion_social,
          acudiente.s_pais = req.body.pais,
          acudiente.s_tiposangre = req.body.cbtipo_sangre,
          acudiente.s_usuario = req.body.usuario,
          acudiente.s_contraseña = req.body.contraseña,
          acudiente.s_curso = req.body.curso
          acudiente.save(function(err){
            if (!err)
            {
              res.render("platform/acudiente/show",{acudiente:acudiente});
            }
            else {
              res.render("platform/acudiente/"+acudiente._id+"/edit", {acudiente: acudiente});
            }
          });
        }
        else {
          console.log("Contraseñas no coinciden");
          res.redirect("platform/");
        }
      }
    });
  }).get(function(req, res){
    Acudiente.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/acudiente/show",{acudiente:doc});
      }
    });
  }).delete(function(req, res){
    Acudiente.findOneAndRemove({_id: req.params.id},function(err){
      if(err)
      {
        console.log(err);
        res.redirect("/platform/acudiente/"+req.params.id);
      }
      else
      {
        res.redirect("/platform/acudiente");
      }
    });
  });

router.route("/estudiante/:id")
  .get(function(req, res){
    Estudiante.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/estudiante/show",{estudiante:doc});
      }
    });
  });

router.route("/evento/:id")
  .get(function(req, res){
    Evento.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/evento/show",{evento:doc});
      }
    });
  });

router.route("/pago/:id")
  .get(function(req, res){
    Pago.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/pago/show",{pago:doc});
      }
    });
  });

router.route("/sesion/:id")
  .get(function(req, res){
    Sesion.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/sesion/show",{sesion:doc});
      }
    });
  });

router.route("/reporte/:id")
  .get(function(req, res){
    Reporte.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/reporte/show",{reporte:doc});
      }
    });
  });

router.route("/clase/:id")
  .get(function(req, res){
    Clase.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/clase/show",{clase: doc});
      }
    });
  })
  .put(function(req, res){
    Clase.findById(req.params.id, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else {
        doc.s_clase_tipo = req.body.tipo_clase,
        doc.d_clase_caracteristica = req.body.caracteristica,
        doc.s_ciudad = req.body.ciudad,
        doc.i_sesion = req.body.sesion,
        doc.i_estudiante = req.body.estudiante

        doc.save(function(err){
          if (!err)
          {
            res.render("platform/clase/show", {clase: doc});
          }
          else
          {
            res.redirect("platform/clase/"+doc._id+"/edit");
          }
        });
      }
    });
  }).delete(function(req, res){
    Clase.findOneAndRemove({_id: req.params.id},function(err){
      if(err)
      {
        console.log(err);
        res.redirect("/platform/clase/"+req.params.id);
      }
      else
      {
        res.redirect("/platform/clase");
      }
    });
  });

router.route("/inscripcion/:id")
  .get(function(req, res){
    Inscripcion.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/inscripcion/show",{inscripcion: doc});
      }
    });
  });

router.route("/torneo/:id")
  .get(function(req, res){
    Torneo.findById(req.params.id,function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        res.render("platform/torneo/show",{torneo: doc});
      }
    });
  });

//Editar
router.route("/acudiente/:id/edit")
  .get(function(req, res){
    Curso.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Acudiente.findById(req.params.id, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            res.render("platform/acudiente/edit",{acudiente: doc1, cursos: doc});
          }
        });
      }
    });
  });

router.route("/clase/:id/edit")
  .get(function(req, res){
    Sesion.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Estudiante.find({}, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            Clase.findById(req.params.id, function(err2, doc2){
              if (err2)
              {
                console.log(err2);
                res.redirect("platform/");
              }
              else
              {
                res.render("platform/clase/edit",{sesiones: doc, estudiantes: doc1, clase: doc2});
              }
            });
          }
        });
      }
    });
  });

router.route("/curso/:id/edit")
  .get(function(req, res){
    Entrenador.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Curso.findById(req.params.id, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            res.render("platform/curso/edit",{curso: doc1, entrenadores: doc});
          }
        });
      }
    });
  });

router.route("/entrenador/:id/edit")
  .get(function(req, res){
    Sucursal.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Entrenador.findById(req.params.id, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            res.render("platform/entrenador/edit",{sucursales: doc, entrenador: doc1});
          }
        });
      }
    });
  });

router.route("/estudiante/:id/edit")
  .get(function(req, res){
    Acudiente.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Estudiante.findById(req.params.id, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            res.render("platform/estudiante/edit",{acudientes: doc, estudiante: doc1});
          }
        });
      }
    });
  });

router.route("/evento/:id/edit")
  .get(function(req, res){
      Evento.findById(req.params.id, function(err, doc){
        if (err)
        {
          console.log(err);
          res.redirect("platform/");
        }
        else
        {
          res.render("platform/evento/edit",{evento: doc});
        }
      });
  });

router.route("/inscripcion/:id/edit")
  .get(function(req, res){
      Evento.find({}, function(err, doc){
        if (err)
        {
          console.log(err);
          res.redirect("platform/");
        }
        else
        {
          Estudiante.find({}, function(err1, doc1){
            if (err1)
            {
              console.log(err1);
              res.redirect("platform/");
            }
            else
            {
              Inscripcion.findById(req.params.id, function(err2,doc2){
                if (err2)
                {
                  console.log(err1);
                  res.redirect("platform/");
                }
                else {
                  res.render("platform/inscripcion/edit",{eventos: doc, estudiantes: doc1, inscripcion: doc2});
                }
              });
            }
          });
        }
      });
  });

router.route("/pago/:id/edit")
  .get(function(req, res){
    Curso.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Pago.findById(req.params.id, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            res.render("platform/pago/edit",{cursos: doc, pago: doc1});
          }
        });
      }
    });
  });


router.route("/reporte/:id/edit")
  .get(function(req, res){
      Reporte.findById(req.params.id, function(err, doc){
        if (err)
        {
          console.log(err);
          res.redirect("platform/");
        }
        else
        {
          res.render("platform/reporte/edit",{reporte: doc});
        }
      });
  });

router.route("/sesion/:id/edit")
  .get(function(req, res){
      Sesion.findById(req.params.id, function(err, doc){
        if (err)
        {
          console.log(err);
          res.redirect("platform/");
        }
        else
        {
          res.render("platform/sesion/edit",{sesion: doc});
        }
      });
  });

router.route("/sucursal/:id/edit")
  .get(function(req, res){
      Sucursal.findById(req.params.id, function(err, doc){
        if (err)
        {
          console.log(err);
          res.redirect("platform/");
        }
        else
        {
          res.render("platform/sucursal/edit",{sucursal: doc});
        }
      });
  });

router.route("/torneo/:id/edit")
  .get(function(req, res){
    Estudiante.find({}, function(err, doc){
      if (err)
      {
        console.log(err);
        res.redirect("platform/");
      }
      else
      {
        Torneo.findById(req.params.id, function(err1, doc1){
          if (err1)
          {
            console.log(err1);
            res.redirect("platform/");
          }
          else
          {
            res.render("platform/torneo/edit",{estudiantes: doc, torneos: doc1});
          }
        });
      }
    });
  });

module.exports = router;
