const controller = require("../controllers/data.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

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