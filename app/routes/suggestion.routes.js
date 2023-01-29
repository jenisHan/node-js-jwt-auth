const controller = require("../controllers/suggestion.controller");

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
        "/api/suggestions/find_all",
        controller.findAll
    );

    app.get(
        "/api/suggestions/findSuggestionById/:id",
        controller.findSuggestionById
    );

    app.get(
        "/api/suggestions/findUserById/:id",
        controller.findUserById
    );

    // backend routes
    app.get(
        "/api/suggestions/get_all",
        controller.getAllSuggestions
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