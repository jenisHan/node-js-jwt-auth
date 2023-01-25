const db = require("../models");
Avatar = db.avatar

// Get All Notifications
exports.allAvatar = (req, res) => {
    Avatar.findAll({
    }).then(result => {
        res.status(200).send(result);
    });
};

//Get Avatar Onebyone
exports.oneAvatar = (req, res) => {
    Avatar.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.status(200).send(result)
    })
  }

// Create New Notification
exports.createAvatar = (req, res) => {
    // Save Avatar to Database
    Avatar.create({
        name: req.body.name,
        file_url: req.body.file_url,
        cost: req.body.cost
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Notification
exports.updateAvatar = (req, res) => {
    Avatar.update(
        {
            name: req.body.name,
            file_url: req.body.file_url,
            cost: req.body.cost
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};


// Delete Notification
exports.deleteAvatar = async (req, res) => {
    try {
      const postDelete = await Avatar.destroy({ where: { id: req.params.id } });
      res.json(postDelete)
    } catch (error) {
      console.log(error)
    }
  };
