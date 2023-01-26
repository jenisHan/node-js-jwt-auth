const db = require("../models")
Comments = db.comment
User = db.user

// Get all comments include users
exports.findAll = (req, res) => {
  return User.findAll({ include: ["comments"] })
    .then((comment) => {
      res.json(comment)
    });
};

// Get the comments for a given user id
exports.findCommentById = (req, res) => {
  return User.findByPk(req.params.id, { include: ["comments"] })
    .then((comment) => {
      // res.json(category)
      res.status(200).send(comment);
    });
};

// Get the user for a given comment id
exports.findUserById = (req, res) => {
  return Comments.findByPk(req.params.id, { include: ["user"] })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log(">> Error while finding user: ", err);
    });
};

//Get All Comments
exports.getAllComments = (req, res) => {
  Comments.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Category Onebyone
exports.getOneComment = (req, res) => {
  Comments.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Create New Category
exports.createComment = (req, res) => {
  //save new comment to database
  Comments.create({
    description: req.body.description,
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};


//Update Category
exports.updateComment = (req, res) => {
  Comments.update(
    {
      description: req.body.description,
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};

//Delete Category
exports.deleteComment = async (req, res) => {
  try {
    const postDelete = await Comments.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};