let isAuthenticated = require("../config/middleware/isAuthenticated");
let db = require('../models');

module.exports = function (app) {

  app.get("/", function (req, res) {
    if (req.user) {
      res.redirect("/signedin");
    }
    res.redirect("/login");
  });

  app.get("/login", function (req, res) {
    if (req.user) {
      res.redirect("/signedin");
    }
    res.redirect("/login");
  });

  app.get("/signedin", isAuthenticated, function (req, res) {
    res.redirect("/signedin");
  });

  //Renders home screen for game
  app.get("/index", function (req, res) {
    res.json('index');
  })

  app.get("/questions", function (req, res) {
    res.json('jeopardyBoard', db.Questions);
  })
};
