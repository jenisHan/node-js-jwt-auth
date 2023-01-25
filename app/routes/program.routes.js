const controller = require("../controllers/program.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/program/get_All",
        controller.allPrograms
    );

    app.get(
        "/api/program/get_one/:id",
        controller.oneProgram
    )

    app.post(
        "/api/program/create",
        controller.createProgram
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