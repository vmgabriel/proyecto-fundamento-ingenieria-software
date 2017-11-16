module.exports = function(req, res, next)
{
  if (req.session.rol == 2)
  {
    res.redirect("/app");
  }
  else
  {
    next();
  }
}
