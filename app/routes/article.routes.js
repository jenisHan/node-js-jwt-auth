const controller = require("../controllers/article.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    // add recommend
    app.put(
        "/api/article/addRecommend/:id",
        controller.addRecommend
    );

    // add recommend
    app.put(
        "/api/article/addOpposition/:id",
        controller.addOpposition
    );

    // add browingcount
    app.put(
        "/api/article/addBrowingCount/:id",
        controller.addBrowingCount
    );

    // find best adding user
    app.get(
        "/api/article/findTopUser",
        controller.findTopUser
    );

    // frontend functions
    app.get(
        "/api/article/findAll",
        controller.findAll
    );

    app.get(
        "/api/article/findArticleCategoryById/:id",
        controller.findArticleCategoryById
    );

    app.get(
        "/api/article/findArticleById/:id",
        controller.findArticleById
    );

    // backend functions
    app.get(
        "/api/article/category/get_All",
        controller.getAllCategories
    );

    app.get(
        "/api/article/category/get_one/:id",
        controller.getOneCategory
    )

    app.post(
        "/api/article/category/create",
        controller.createCategory
    );

    app.put(
        "/api/article/category/update/:id",
        controller.updateCategory
    );

    app.delete(
        "/api/article/category/delete/:id",
        controller.deleteCategory
    );


    app.get(
        "/api/article/get_All",
        controller.allArticle
    )

    app.get(
        "/api/article/get_one/:id",
        controller.oneArticle
    )

    app.post(
        "/api/article/verify",
        controller.verifyArticle
    );

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