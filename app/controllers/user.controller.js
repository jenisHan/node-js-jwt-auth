const db = require("../models");
User = db.user

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

// Get All Users
exports.getAllUsers = (req, res) => {
  User.findAll({
  }).then(users => {
    res.status(200).send(users);
  });
}

//Delete user
exports.deleteUser = async (req, res) => {
  try {
    const postDelete = await User.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
}
