const controller = require("../controllers/campus.controller");

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
    "/api/campus/findAllBy",
    controller.findAllBy
  );

  app.get(
    "/api/campus/findAll",
    controller.findAll
  );

  app.get(
    "/api/campus/findCampusCategoryById/:id",
    controller.findCampusCategoryById
  );

  app.get(
    "/api/campus/findCampusById/:id",
    controller.findCampusById
  );

  app.get(
    "/api/campus/getTopCampuses",
    controller.getTopCampuses
  );

  // backend routes
  app.get(
    "/api/campus/category/get_All",
    controller.getAllCategories
  );

  app.get(
    "/api/campus/category/get_one/:id",
    controller.getOneCategory
  )

  app.post(
    "/api/campus/category/create",
    controller.createCategory
  );


  app.put(
    "/api/campus/category/update/:id",
    controller.updateCategory
  );

  app.delete(
    "/api/campus/category/delete/:id",
    controller.deleteCategory
  );


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

  app.put(
    "/api/campus/upvote/:id",
    controller.upVote
  );
  
  app.put(
    "/api/campus/downvote/:id",
    controller.downVote
  );
};

