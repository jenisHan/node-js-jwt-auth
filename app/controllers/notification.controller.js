const db = require("../models");
Notification = db.notification

// Get All Notifications
exports.allNotifications = (req, res) => {
  Notification.findAll({
  }).then(notifications => {
    res.status(200).send(notifications);
  });
};

// Get Today's Notifications
exports.todayNotification = (req, res) => {
  var today_datetime = new Date();
  console.log(today_datetime);

  Notification.findAll({
    where: {
      date: today_datetime
    }
  }).then(notifications => {
    res.status(200).send(notifications);
  });
};

// Create New Notification
exports.createNotification = (req, res) => {
  // Save Notification to Database
  Notification.create({
    date: req.body.date,
    description: req.body.description,
  })
    .then(notification => {
      res.status(200).send(notification);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Update Notification
exports.updateNotification = (req, res) => {
  Notification.update(
    { date: req.body.date, description: req.body.description }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};

// Delete Notification
exports.deleteNotification = async (req, res) => {
  try {
    const postDelete = await Notification.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};