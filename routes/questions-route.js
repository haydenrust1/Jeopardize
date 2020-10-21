let db = require('../models');
module.exports = function (app) {

    app.get("/api/questions", function (req, res) {
        db.Questions.findAll()
            .then(function (result) {
                res.json(result);
            });
    });

    app.post("/api/questions", function (req, res) {
        db.Questions.create(req.body)
            .then(function (result) {
                res.json(result);
            });
    });
}