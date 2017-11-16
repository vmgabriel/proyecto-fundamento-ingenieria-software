module.exports = function(req, res, next)
{
  if (req.session.rol == 1)
  {
    res.redirect("/platform");
  }
  else
  {
    next();
  }
}
