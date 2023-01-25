const db = require("../models");
Program = db.program

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
    category: req.body.category,
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
      category: req.body.category,
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
exports.deleteProgram= async (req, res) => {
  try {
    const postDelete = await Program.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};