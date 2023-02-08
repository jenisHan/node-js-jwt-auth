const db = require("../models");
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
    order: [['recommends', 'DESC']]
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




//Get All Programs
exports.allPrograms = (req, res) => {
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

//Create New Program
exports.createProgram = (req, res) => {
  //save new program to database
  Program.create({
    name: req.body.name,
    description: req.body.description,
    requirement: req.body.requirement,
    programCategoryId: req.body.programCategoryId,
    date: req.body.date,
    purchases: req.body.purchases,
    recommends: req.body.recommends,
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

//Update Program
exports.updateProgram = (req, res) => {
  Program.update(
    {
      name: req.body.name,
      description: req.body.description,
      requirement: req.body.requirement,
      programCategoryId: req.body.programCategoryId,
      date: req.body.date,
      purchases: req.body.purchases,
      recommends: req.body.recommends,
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

//Delete Program
exports.deleteProgram = async (req, res) => {
  try {
    const postDelete = await Program.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};