const controller = require("../controllers/answer.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/answer/findAnswersByQuestionId/:id",
        controller.findAnswersByQuestionId
    );

    app.get(
        "/api/answer/get_All",
        controller.getAllAnswers
    );

    app.get(
        "/api/answer/get_one/:id",
        controller.getOneAnswer
    )

    app.post(
        "/api/answer/create",
        controller.createAnswer
    );

    app.put(
        "/api/answer/update/:id",
        controller.updateAnswer
    );

    app.delete(
        "/api/answer/delete/:id",
        controller.deleteAnswer
    );
}
