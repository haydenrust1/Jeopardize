module.exports = function (app, db) {

    app.get("/api/questions", function (req, res) {
        db.Questions.findOne({
            where: {
                //TEST: should randomly select from categories column
                category: db.sequelize.random()
            }
        })
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