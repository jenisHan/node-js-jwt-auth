const { authJwt } = require("../middleware");
const controller = require("../controllers/notification.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/notifications/get_All",
    controller.allNotifications
  );

  app.get(
    "/api/notifications/get_today's",
    controller.todayNotification
  );

  app.get(
    "/api/notifications/get/:id",
    controller.getNotification
  );

  app.post(
    "/api/notifications/create",
    controller.createNotification
  );

  app.put(
    "/api/notifications/update/:id",
    controller.updateNotification
  );

  app.delete(
    "/api/notifications/delete/:id",
    controller.deleteNotification
  );
};