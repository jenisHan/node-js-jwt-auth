const db = require("../models");
const uploadFile = require("../middleware/upload");

Avatar = db.avatar

// Get All Avatars
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

// Create New Avatar
exports.createAvatar = async (req, res) => {

  try {
    await uploadFile(req, res);
  } catch (err) {
    console.log(err);

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size cannot be larger than 2MB!",
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }

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

// Update Avatar
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


// Delete Avatar
exports.deleteAvatar = async (req, res) => {
  try {
    const postDelete = await Avatar.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};
