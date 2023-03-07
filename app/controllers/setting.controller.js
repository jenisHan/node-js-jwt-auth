const db = require("../models");
const uploadFile = require("../middleware/upload");

Setting = db.setting

// Get All Settings
exports.allSetting = (req, res) => {
  Setting.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Setting Onebyone
exports.oneSetting = (req, res) => {
  Setting.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Get Setting Onebyone
exports.oneSettingByTitle = (req, res) => {
    Setting.findOne({
      where: {
        title: req.params.title
      }
    })
      .then(result => {
        res.status(200).send(result)
      })
  }

// Create New Setting
exports.createSetting = async (req, res) => {
  req.tailPath = "setting/"
  req.dateNow = Date.now()

  try {
    await uploadFile(req, res);
    // Save Setting to Database
    Setting.create({
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



// Update Setting
exports.updateSetting = (req, res) => {
  Setting.update(
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

// Update Setting By Title
exports.updateSettingByTitle = (req, res) => {
    console.log("AAAAAAAA",req.body);
    Setting.update(
      {
        value: req.body.value,
      }, {
      where: {
        title: req.params.title
      },
    }).then(result => {
      res.status(200).send(result);
    });
  };

  

// Delete Setting
exports.deleteSetting = async (req, res) => {
  try {
    const postDelete = await Setting.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};
