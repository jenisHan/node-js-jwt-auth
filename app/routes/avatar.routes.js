const controller = require("../controllers/avatar.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/avatar/get_All",
        controller.allAvatar
    );

    app.get(
        "/api/avatar/get_one/:id",
        controller.oneAvatar
    )

    app.post(
        "/api/avatar/create",
        controller.createAvatar
    );

    app.put(
        "/api/avatar/update/:id",
        controller.updateAvatar
    );

    app.delete(
        "/api/avatar/delete/:id",
        controller.deleteAvatar
      );

};