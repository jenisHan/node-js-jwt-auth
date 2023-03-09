const { article } = require("../models");
const db = require("../models");
User = db.user
BrowseHistory = db.browseHistory

// Get all users include browseHistories
exports.findAll = (req, res) => {
    return User.findAll({
      include: ["browseHistories"],
    }).then((user) => {
      res.json(user)
    });
  };

// Get the browseHistories for a given user
exports.findBrowseHistoryById = (req, res) => {
  return User.findByPk(req.params.id, { include: ["browseHistories"]})
    .then((user) => {
      // res.json(user)
      res.status(200).send(user);
    });
};

// Get the browseHistories for a given browseHistory id
exports.findUserById = (req, res) => {
  return BrowseHistory.findByPk(req.params.id, { include: ["user", "campus"] })
    .then((browse) => {
      res.json(browse)
    })
    .catch((err) => {
      console.log(">> Error while finding browsehistory: ", err);
    });
};

exports.getAllBrowseHistories = (req, res) => {
  BrowseHistory.findAll({ 
    include: [
      {
        model: db.campus,
        as: "campus",
        attributes: ["name", "description","level"],
        include:[
          {
            model: db.campusCategory,
            as: "campusCategory",
            attributes:["title"]
          }
        ]
      }
      ],
    attributes: ["date", "count"]
  }).then(result => {
    res.status(200).send(result);
  });
};
//Get Category Onebyone
exports.getOneBrowseHistory = (req, res) => {
  BrowseHistory.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Create New Category
exports.createBrowseHistory = (req, res) => {
  //save new category to database
  BrowseHistory.create({
    userId: req.body.userId,
    campusId: req.body.campusId
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//Delete Category
exports.deleteBrowseHistory = async (req, res) => {
  try {
    const postDelete = await BrowseHistory.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};

  