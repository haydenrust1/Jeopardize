module.exports = function (app, db) {

    //retrieves ALL questions 
    app.get("/questions", function (req, res) {
        // let randomCategory = Math.floor(Math.random() * category.length);
        db.jeopardize_q.findAll({
            raw: true
        }
            /* FOR RANDOMIZING SELECTION*/
            // {
            //     order: [
            //         //randomly selects column
            //         [db.sequelize.random()]
            //     ]
            // }
        )
            .then(function (result) {
                console.log(result);
                // let val100 = [];
                // let val200 = [];
                // let val300 = [];
                // let val400 = [];
                // let val500 = [];

                // for (let i = 0; i < result.length; i++) {

                // }
                // console.log(data);
                res.render('jeopardyBoard', result);
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