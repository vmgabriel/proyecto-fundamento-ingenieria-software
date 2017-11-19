var Acudiente = require("../models/acudiente").Acudiente;

module.exports = function(req, res, next)
{
  if (req.session.rol == 1)
  {
    res.redirect("/platform");
  }
  else
  {
    Acudiente.findById(req.session.user_id, function(err,doc){
      if (err)
      {
        console.log(err);
        res.redirect("/login");
      }
      else
      {
        res.locals = { user: doc};
        next();
      }
    });
  }
}
