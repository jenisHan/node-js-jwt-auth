const controller = require("../controllers/question.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // frontend routes
    app.get(
        "/api/questions/find_all",
        controller.findAll
    );

    app.get(
        "/api/questions/findQuestionById/:id",
        controller.findQuestionById
    );

    app.get(
        "/api/questions/findUserById/:id",
        controller.findUserById
    );

    // backend routes
    app.get(
        "/api/questions/get_all",
        controller.getAllQuestions
    );

    app.get(
        "/api/questions/get_one/:id",
        controller.getQuestion
    )

    app.post(
        "/api/questions/create",
        controller.createQuestion
    );

    // app.put(
    //     "/api/questions/update/:id",
    //     controller.updateQuestion
    // );

    app.delete(
        "/api/questions/delete/:id",
        controller.deleteQuestion
    );
}