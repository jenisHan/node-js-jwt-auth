const controller = require("../controllers/article.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/article/get_All",
        controller.allArticle
    )

    app.get(
        "/api/article/get_one/:id",
        controller.oneArticle
    )

    app.post(
        "/api/article/create",
        controller.createArticle
    );

    app.put(
        "/api/article/update/:id",
        controller.updateArticle
    );

    app.delete(
        "/api/article/delete/:id",
        controller.deleteArticle
    );

};