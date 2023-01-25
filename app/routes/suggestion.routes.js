const controller = require("../controllers/suggestion.controller");

module.exports = function (app) {
    app.use(function (req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    app.get(
        "/api/suggestions/get_All",
        controller.allSuggestions
    );

    app.get(
        "/api/suggestions/get_one/:id",
        controller.getSuggestion
    )

    app.post(
        "/api/suggestions/create",
        controller.createSuggestion
    );

    app.put(
        "/api/suggestions/update/:id",
        controller.updateSuggestion
    );

    app.delete(
        "/api/suggestions/delete/:id",
        controller.deleteSuggestion
    );
}