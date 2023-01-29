const controller = require("../controllers/data.controller");

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
        "/api/data/findAll",
        controller.findAll
    );

    app.get(
        "/api/data/findDataCategoryById/:id",
        controller.findDataCategoryById
    );

    app.get(
        "/api/data/findDataById/:id",
        controller.findDataById
    );

    // backend routes
    app.get(
        "/api/data/category/get_All",
        controller.getAllCategories
    );

    app.get(
        "/api/data/category/get_one/:id",
        controller.getOneCategory
    )

    app.post(
        "/api/data/category/create",
        controller.createCategory
    );


    app.put(
        "/api/data/category/update/:id",
        controller.updateCategory
    );

    app.delete(
        "/api/data/category/delete/:id",
        controller.deleteCategory
    );

    //////////
    app.get(
        "/api/data/get_All",
        controller.allData
    )

    app.get(
        "/api/data/get_one/:id",
        controller.oneData
    )

    app.post(
        "/api/data/create",
        controller.createData
    );

    app.put(
        "/api/data/update/:id",
        controller.updateData
    );

    app.delete(
        "/api/data/delete/:id",
        controller.deleteData
    );
};