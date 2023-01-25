const db = require("../models");
Campus = db.campus

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
    recommends: req.body.recommends
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
      recommends: req.body.recommends
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