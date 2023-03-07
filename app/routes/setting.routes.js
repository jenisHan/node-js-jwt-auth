const controller = require("../controllers/setting.controller")

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/setting/get_All",
        controller.allSetting
    );

    app.get(
        "/api/setting/get_one/:id",
        controller.oneSetting
    )

    app.get(
        "/api/setting/get_one_by_title/:title",
        controller.oneSettingByTitle
    )

    app.post(
        "/api/setting/create",
        controller.createSetting
    );

    app.put(
        "/api/setting/update/:id",
        controller.updateSetting
    );

    app.put(
        "/api/setting/update_by_title/:title",
        controller.updateSettingByTitle
    );

    app.delete(
        "/api/setting/delete/:id",
        controller.deleteSetting
    );
};