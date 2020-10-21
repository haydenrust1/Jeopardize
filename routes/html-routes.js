var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {

  app.get("/", function(req, res) {
    if (req.user) {
      res.redirect("/signedin");
    }
    res.redirect("/login");
  });

  app.get("/login", function(req, res) {
    if (req.user) {
      res.redirect("/signedin");
    }
    res.redirect("/login");
  });

  app.get("/signedin", isAuthenticated, function(req, res) {
    res.redirect("/signedin");
  });

};
