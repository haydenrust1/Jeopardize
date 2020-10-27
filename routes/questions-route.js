module.exports = function (app, db) {

    //retrieves questions by category for gameboard
    app.get("/questions", function (req, res) {
        // let randomCategory = Math.floor(Math.random() * category.length);
        db.jeopardize_q.findAll(
            {
                order: [
                    //randomly selects column
                    [db.sequelize.random()]
                ]
            }
        )
            .then(function (result) {
                let questionArr = result
                res.json(questionArr);
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