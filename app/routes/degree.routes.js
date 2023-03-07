const controller = require("../controllers/degree.controller");

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
        "/api/degrees/find_all",
        controller.findAll
    );

    app.get(
        "/api/degrees/findDegreeById/:id",
        controller.findDegreeById
    );

    app.get(
        "/api/degrees/findUserById/:id",
        controller.findUserById
    );

    // backend routes
    app.get(
        "/api/degrees/get_all",
        controller.getAllDegrees
    );

    app.get(
        "/api/degrees/get_one/:id",
        controller.getDegree
    );

}