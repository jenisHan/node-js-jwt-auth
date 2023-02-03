const { authJwt } = require("../middleware");
const { verifySignUp } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );

  // Get all users
  app.get(
    "/api/user/getAllUsers",
    controller.getAllUsers
  );


  // Create New User
  app.post(
    "/api/user/create",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.createUser
  );

  
  // Get User by Id
  app.get(
    "/api/user/get/:id",
    controller.getOneUser
  );

  // Update User by ID
  app.put(
    "/api/user/update/:id",
    controller.updateUser
  );

  // Delete user
  app.delete(
    "/api/user/delete/:id",
    controller.deleteUser
  );
};
