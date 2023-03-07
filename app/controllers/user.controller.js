const db = require("../models");
var bcrypt = require("bcryptjs");
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

// Deposit Balance
exports.depositUser = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then((selectedUser) => {
    User.update(
      {
        balance: (selectedUser.balance + req.body.amount),
      }, {
      where: {
        id: req.params.id
      },
    }).then(result => {
      res.status(200).send(result);
    });
  });
}

// Spend Balance
exports.spendUser = (req, res) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  }).then((selectedUser) => {
    User.update(
      {
        balance: (selectedUser.balance - req.body.cost),
      }, {
      where: {
        id: req.params.id
      },
    }).then(result => {
      res.status(200).send(result);
    });
  });
}

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

//Get User by Id
exports.getOneUser = (req, res) => {
  return User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

// Create New User
exports.createUser = async (req, res) => {

  // Save User to Database
  User.create({
    username: req.body.username,
    name: req.body.name,
    email: req.body.username + "@gmail.com",
    gender: req.body.gender,
    birthday: req.body.birthday,
    password: req.body.password,

  })
    .then(user => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles
            }
          }
        }).then(roles => {
          user.setRoles(roles).then(() => {
            res.send({ message: "User created successfully!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "User created successfully!" });
        });
      }
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

// Update User
exports.updateUser = (req, res) => {
  User.update(
    {
      username: req.body.username,
      name: req.body.name,
      email: req.body.email,
      gender: req.body.gender,
      birthday: req.body.birthday,
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};