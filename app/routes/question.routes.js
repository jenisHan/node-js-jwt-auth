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
        "/api/question/findAll",
        controller.findAll
    );

    app.get(
        "/api/question/findSomeQuestions",
        controller.findSomeQuestions
    );

    app.get(
        "/api/question/findQuestionById/:id",
        controller.findQuestionById
    );

    app.get(
        "/api/question/findAnswerById/:id",
        controller.findAnswerById
    );

    // backend routes
    app.get(
        "/api/question/get_All",
        controller.getAllQuestions
    );

    app.get(
        "/api/question/get_question/:id",
        controller.getOneQuestion
    )

    app.post(
        "/api/question/create",
        controller.createQuestion
    );

    app.put(
        "/api/question/update/:id",
        controller.updateQuestion
    );

    app.delete(
        "/api/question/delete/:id",
        controller.deleteQuestion
    );
}
