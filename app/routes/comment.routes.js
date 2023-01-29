const controller = require("../controllers/comment.controller")

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
        "/api/comment/findAll",
        controller.findAll
    );

    app.get(
        "/api/comment/findCommentById/:id",
        controller.findCommentById
    );

    app.get(
        "/api/comment/findUserById/:id",
        controller.findUserById
    );

    // backend routes
    app.get(
        "/api/comment/get_All",
        controller.getAllComments
    );

    app.get(
        "/api/comment/getOneComment/:id",
        controller.getOneComment
    )

    app.post(
        "/api/comment/create",
        controller.createComment
    );

    app.put(
        "/api/comment/update/:id",
        controller.updateComment
    );

    app.delete(
        "/api/comment/delete/:id",
        controller.deleteComment
    );
}