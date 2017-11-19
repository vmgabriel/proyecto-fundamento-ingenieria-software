var Entrenador = require("../models/entrenador").Entrenador;

module.exports = function(req, res, next)
{
  if (req.session.rol == 2)
  {
    res.redirect("/app");
  }
  else
  {
    Entrenador.findById(req.session.user_id, function(err,doc){
      if (err)
      {
        console.log(err);
        res.redirect("/login");
      }
      else
      {
        res.locals = {user: doc};
        next();
      }
    });
  }
}
