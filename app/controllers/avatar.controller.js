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
  req.tailPath = "avatar/"
  req.dateNow = Date.now()

  if(req.file==null){
    res.status(200).send(result);
  }

  try {
    await uploadFile(req, res);
    // Save Avatar to Database
    Avatar.create({
      name: req.body.name,
      // file_url: "/resources/static/assets/uploads/" + req.tailPath + req.dateNow + req.file.originalname,
      file_url: req.dateNow + req.file.originalname,
      cost: req.body.cost
    })
      .then(result => {
        res.status(200).send(result);
      })
      .catch(err => {
        res.status(500).send({ message: err.message });
      });
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
};

// Download Avatar
exports.download = (req, res) => {
  const fileName = req.params.path;
  const directoryPath = __basedir + "/resources/static/assets/uploads/avatar/";

  console.log(fileName)

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

// Download Avatar By Id
exports.downloadById = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/avatar/";

  Avatar.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      const fileName = result.file_url;
      res.download(directoryPath + fileName, fileName, (err) => {
        if (err) {
          res.status(500).send({
            message: "Could not download the file. " + err,
          });
        }
      });
      // res.status(200).send(result)
    })
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
