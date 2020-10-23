let isAuthenticated = require("../config/middleware/isAuthenticated");
let db = require('../models');

module.exports = function (app) {

  app.get("/", function (req, res) {
    if (req.user) {
      return res.redirect("/signedin");
    }
    return res.redirect("/login");
  });

  app.get("/login", function (req, res) {
      res.render("login");
  });

  app.get("/signedin", isAuthenticated, function (req, res) {
    res.redirect("/signedin");
  });

  //Renders home screen for game
  app.get("/index", function (req, res) {
    res.render("index");
  })

  //Renders game board
  app.get("/questions", function (req, res) {
    res.render("jeopardyBoard", db.Questions);
  })
};
