const controller = require("../controllers/dataPurchaseHistory.controller")

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
        "/api/dataPurchaseHistory/findAll",
        controller.findAll
    );

    app.post(
        "/api/dataPurchaseHistory/findDataPurchaseHistoyById/:id",
        controller.findDataPurchaseHistoyById
    );

    app.get(
        "/api/dataPurchaseHistory/findUserById/:id",
        controller.findUserById
    );

    // backend routes
    app.get(
        "/api/dataPurchaseHistory/get_All",
        controller.getAllDataPurchaseHistories
    );

    app.get(
        "/api/dataPurchaseHistory/get_one/:id",
        controller.getOneDataPurchaseHistory
    );

    app.post(
        "/api/dataPurchaseHistory/create",
        controller.createDataPurchaseHistory
    );

    app.delete(
        "/api/dataPurchaseHistory/delete/:id",
        controller.deleteDataPurchaseHistory
    );
}