let db = require('../models');
module.exports = function (app) {
    app.get("/api/questions", function (req, res) {
        db.Questions.findAll()
            .then(function (result) {
                res.json(result);
            });
    });
}