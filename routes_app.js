var express = require("express");

var router = express.Router();

router.get("/", function(req, res){
  res.render("app/home");
});

module.exports = router;
