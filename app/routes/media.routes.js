const controller = require("../controllers/media.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/media/get_All",
        controller.allMedia
    );

    app.get(
        "/api/media/get_one/:id",
        controller.oneMedia
    )

    app.post(
        "/api/media/create",
        controller.createMedia
    );

    app.get(
        "/api/media/file/:path",
        controller.download
    );

    app.get(
        "/api/media/fileById/:id",
        controller.downloadById
    );

    app.put(
        "/api/media/update/:id",
        controller.updateMedia
    );

    app.delete(
        "/api/media/delete/:id",
        controller.deleteMedia
    );
};