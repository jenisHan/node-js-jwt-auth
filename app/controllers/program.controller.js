const db = require("../models");
const uploadFile = require("../middleware/upload");

Program = db.program
ProgramCategory = db.programCategory

// Get all Categories include programs
exports.findAllBy = (req, res) => {
  return ProgramCategory.findAll({
    include: ["programs"],
  }).then((programCategories) => {
    res.json(programCategories)
  });
};

// Get all programs
exports.findAll = (req, res) => {
  return Program.findAll({
    include: ["programCategory"],
  }).then((program) => {
    res.json(program)
  });
};


// Get the programs for a given category id
exports.findProgramCategoryById = (req, res) => {
  return ProgramCategory.findByPk(req.params.id, { include: ["programs"] })
    .then((category) => {
      // res.json(category)
      res.status(200).send(category);
    });
};

// Get the program for a given program id
exports.findProgramById = (req, res) => {
  return Program.findByPk(req.params.id, { include: ["programCategory"] })
    .then((program) => {
      res.json(program)
    })
    .catch((err) => {
      console.log(">> Error while finding program: ", err);
    });
};

// Get top programs
exports.getTopPrograms = (req, res) => {
  return Program.findAll({
    limit: 3,
    order: [['purchases', 'DESC']]
    // include: ["programCategory"],
  }).then((program) => {
    res.json(program)
  });
};

//Get All Categories
exports.getAllCategories = (req, res) => {
  ProgramCategory.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Category Onebyone
exports.getOneCategory = (req, res) => {
  ProgramCategory.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Create New Category
exports.createCategory = (req, res) => {
  //save new category to database
  ProgramCategory.create({
    title: req.body.title,
    description: req.body.description,
    parentId: req.body.parentId
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//Update Category
exports.updateCategory = (req, res) => {
  ProgramCategory.update(
    {
      title: req.body.title,
      description: req.body.description,
      parentId: req.body.parentId
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};

//Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const postDelete = await ProgramCategory.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};


// Get All Programs
exports.allProgram = (req, res) => {
  Program.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Program Onebyone
exports.oneProgram = (req, res) => {
  Program.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

// Create New Program
exports.createProgram =async (req, res) => {
  req.tailPath = "program/"
  req.dateNow = Date.now()

  try {
    await uploadFile(req, res);
    // Save Program to Database
    Program.create({
      name: req.body.name,
      description: req.body.description,
      requirement: req.body.requirement,
      programCategoryId: req.body.programCategoryId,
      date: req.body.date,
      purchases: req.body.purchases,
      recommends: req.body.recommends,
      file_url: req.dateNow + req.file.originalname,
      image_url:req.body.image_url,
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

// Download Program
exports.download = (req, res) => {
  const fileName = req.params.path;
  const directoryPath = __basedir + "/resources/static/assets/uploads/program/";

  console.log(fileName)

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

// Download Program By Id
exports.downloadById = (req, res) => {
  const directoryPath = __basedir + "/resources/static/assets/uploads/program/";

  Program.findOne({
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

// Update Program
exports.updateProgram = (req, res) => {
  req.tailPath = "program/"
  req.dateNow = Date.now()
  Program.update( 
    {
      name: req.body.name,
      description: req.body.description,
      requirement: req.body.requirement,
      programCategoryId: req.body.programCategoryId,
      date: req.body.date,
      purchases: req.body.purchases,
      recommends: req.body.recommends,
      file_url: req.dateNow + req.file.originalname,
      image_url:req.body.image_url,
      cost: req.body.cost
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};


// Delete Program
exports.deleteProgram = async (req, res) => {
  try {
    const postDelete = await Program.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};

