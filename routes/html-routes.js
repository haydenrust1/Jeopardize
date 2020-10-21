var path = require("path");

var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function (app) {

  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/signedin");
    }
    res.sendFile(path.join(__dirname, "/registration"));
  });

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/signedin");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  app.get("/signedin", isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, "../public/signedin.html"));
  });

};
