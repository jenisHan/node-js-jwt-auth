const controller = require("../controllers/program.controller");

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
        "/api/program/findAllBy",
        controller.findAllBy
    );

    app.get(
        "/api/program/findAll",
        controller.findAll
    );

    app.get(
        "/api/program/findProgramCategoryById/:id",
        controller.findProgramCategoryById
    );

    app.get(
        "/api/program/findProgramById/:id",
        controller.findProgramById
    );

    app.get(
        "/api/program/getTopPrograms",
        controller.getTopPrograms
    );

    // backend routes    
    app.get(
        "/api/program/category/get_All",
        controller.getAllCategories
    );

    app.get(
        "/api/program/category/get_one/:id",
        controller.getOneCategory
    )

    app.post(
        "/api/program/category/create",
        controller.createCategory
    );

    app.put(
        "/api/program/category/update/:id",
        controller.updateCategory
    );

    app.delete(
        "/api/program/category/delete/:id",
        controller.deleteCategory
    );


    app.get(
        "/api/program/get_All",
        controller.allProgram
    );

    app.get(
        "/api/program/get_one/:id",
        controller.oneProgram
    )

    app.post(
        "/api/program/create",
        controller.createProgram                             
    );

    
    app.get(
        "/api/program/file/:path",
        controller.download
    );

    app.get(
        "/api/program/fileById/:id",
        controller.downloadById
    );

    app.put(
        "/api/program/update/:id",
        controller.updateProgram
    );

    app.delete(
        "/api/program/delete/:id",
        controller.deleteProgram
    );
};