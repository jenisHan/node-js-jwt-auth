const db = require("../models");
const uploadFile = require("../middleware/upload");

Media = db.media

// Get All Medias
exports.allMedia = (req, res) => {
  Media.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Media Onebyone
exports.oneMedia = (req, res) => {
  Media.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

// Create New Media
exports.createMedia = async (req, res) => {
  req.tailPath = "media/"
  req.dateNow = Date.now()

  try {
    await uploadFile(req, res);
    // Save Media to Database
    Media.create({
      title: req.body.title,
      // file_url: "/resources/static/assets/uploads/" + req.tailPath + req.dateNow + req.file.originalname,
      file_url: req.dateNow + req.file.originalname,
      description: req.body.description
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

// Download Media
exports.download = (req, res) => {
  const fileName = req.params.path;
  const directoryPath = __basedir + "/resources/static/assets/uploads/media/";

  console.log(fileName)

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

// Download Media By Id
exports.downloadById = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/media/";

  Media.findOne({
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

// Update Media
exports.updateMedia = (req, res) => {
  Media.update(
    {
      title: req.body.title,
      file_url: req.body.file_url,
      description: req.body.description
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};


// Delete Media
exports.deleteMedia = async (req, res) => {
  try {
    const postDelete = await Media.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};
