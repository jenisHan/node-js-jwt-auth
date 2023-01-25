const controller = require("../controllers/campus.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
    
    app.get(
        "/api/campus/get_All",
     controller.allCampus
    );

    app.get(
      "/api/campus/get_one/:id",
      controller.oneCampus
    )

    app.post(
        "/api/campus/create",
        controller.createCampus
    )
    
    app.put(
      "/api/campus/update/:id",
        controller.updateCampus
    )
    app.delete(
      "/api/campus/delete/:id",
      controller.deleteCampus
    )
    

  };