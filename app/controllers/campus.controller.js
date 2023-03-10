const db = require("../models");
Campus = db.campus
CampusCategory = db.campusCategory


// Get all Categories include campuses
exports.findAllBy = (req, res) => {
  return CampusCategory.findAll({
    include: ["campuses"],
  }).then((campusCategories) => {
    res.json(campusCategories)
  });
};

// Get all campuses
exports.findAll = (req, res) => {
  return Campus.findAll({
    include: ["campusCategory"],
  }).then((campus) => {
    res.json(campus)
  });
};

// Get the campus for a given category id
exports.findCampusCategoryById = (req, res) => {
  return CampusCategory.findByPk(req.params.id, { include: ["campuses"] })
    .then((category) => {
      // res.json(category)
      res.status(200).send(category);
    });
};

// Get the campus for a given campus id
exports.findCampusById = (req, res) => {
  return Campus.findByPk(req.params.id, { include: ["campusCategory"] })
    .then((campus) => {
      res.json(campus)
    })
    .catch((err) => {
      console.log(">> Error while finding campus: ", err);
    });
};

// Get top Campuses
exports.getTopCampuses = (req, res) => {
  return Campus.findAll({
    limit: 3,
    order: [['recommends', 'DESC']]
    // include: ["campusCategory"],
  }).then((campus) => {
    res.json(campus)
  });
};

//Get All Categories
exports.getAllCategories = (req, res) => {
  CampusCategory.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Category Onebyone
exports.getOneCategory = (req, res) => {
  CampusCategory.findOne({
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
  CampusCategory.create({
    title: req.body.title,
    description: req.body.description,
    parentId:req.body.parentId
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
  CampusCategory.update(
    {
      title: req.body.title,
      description: req.body.description,
      parentId:req.body.parentId
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
    const postDelete = await CampusCategory.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};

// ----------***---------
//Get All Campuses
exports.allCampus = (req, res) => {
  Campus.findAll({
  }).then(result => {
    res.status(200).send(result);
  })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};
// ----------***---------

//Get Campus OneByone
exports.oneCampus = (req, res) => {
  Campus.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Create New Campus
exports.createCampus = (req, res) => {
  Campus.create({
    name: req.body.name,
    description: req.body.description,
    cost: req.body.cost,
    browses: req.body.browses,
    recommends: req.body.recommends,
    campusCategoryId: req.body.campusCategoryId
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//Update Campus
exports.updateCampus = (req, res) => {
  Campus.update(
    {
      name: req.body.name,
      description: req.body.description,
      cost: req.body.cost,
      browses: req.body.browses,
      recommends: req.body.recommends,
      campusCategoryId: req.body.campusCategoryId
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};


// Delete Campus
exports.deleteCampus = async (req, res) => {
  try {
    const postDelete = await Campus.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};

//upVote
exports.upVote = (req, res) => {
  Campus.update(
    {
      recommends: req.body.recommends,
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};

//downVote
exports.downVote = (req, res) => {
  Campus.update(
    {
      unrecommends: req.body.unrecommends,
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};