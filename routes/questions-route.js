module.exports = function (app, db) {

    //retrieves questions by category for gameboard
    app.get("/api/questions", function (req, res) {
        db.jeopardize_q.findOne({
            where: {
                //TEST: should randomly select from categories column
                category: "ROYAL FEMALE NICKNAMES"
                // db.sequelize.random()
            }
        })
            .then(function (result) {
                console.log(result);
                res.json(result);
            });
    });

    // Retrieves user's created question
    app.get("/api/questions/:id", function (req, res) {
        db.jeopardize_q.findOne({
            where: {
                id: req.params.id
            }
        })
            .then(function (result) {
                res.json(result);
            })
    });

    //Allows user to create question
    app.post("/api/questions", function (req, res) {
        db.jeopardize_q.create(req.body)
            .then(function (result) {
                res.json(result);
            });
    });
}