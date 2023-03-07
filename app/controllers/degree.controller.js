const db = require("../models");
Degree = db.degree;
User = db.user;

// Get all users include degrees
exports.findAll = (req, res) => {
    return User.findAll({
        include: ["degrees"],
    }).then((users) => {
        res.json(users)
    });
};

// Get the degrees for a given user id
exports.findDegreeById = (req, res) => {
    return User.findByPk(req.params.id, { include: ["degrees"] })
        .then((user) => {
            res.status(200).send(user);
        });
};

// Get the user for a given degree id
exports.findUserById = (req, res) => {
    return Degree.findByPk(req.params.id, { include: ["user"] })
        .then((degree) => {
            res.json(degree)
        })
        .catch((err) => {
            console.log(">> Error while finding degree: ", err);
        });
};


//Get All Degrees
exports.getAllDegrees = (req, res) => {
    Degree.findAll({
    }).then(result => {
        res.status(200).send(result)
    });
};

//Get Degree
exports.getDegree = (req, res) => {
    Degree.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
};
