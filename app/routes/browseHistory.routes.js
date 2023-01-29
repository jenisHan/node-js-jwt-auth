const controller = require("../controllers/browseHistory.controller")

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
        "/api/browseHistory/findAll",
        controller.findAll
    );

    app.get(
        "/api/browseHistory/findBrowseHistoryById/:id",
        controller.findBrowseHistoryById
    );

    app.get(
        "/api/browseHistory/findUserById/:id",
        controller.findUserById
    );

    // backend routes
    app.get(
        "/api/browseHistory/get_All",
        controller.getAllBrowseHistories
    );

    app.get(
        "/api/browseHistory/get_one/:id",
        controller.getOneBrowseHistory
    )

    app.post(
        "/api/browseHistory/create",
        controller.createBrowseHistory
    );

    app.delete(
        "/api/browseHistory/delete/:id",
        controller.deleteBrowseHistory
    );
}