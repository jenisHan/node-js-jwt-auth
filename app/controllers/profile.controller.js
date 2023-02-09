const db = require("../models");
User = db.user

//Get User Onebyone
exports.getOneUser = (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
}

//Update Category
exports.updateUser = (req, res) => {
    console.log(req.body);
    User.update(
        {
            username: req.body.username,
            name: req.body.name,
            email: req.body.email,
            gender: req.body.gender,
            birthday: req.body.birthday
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};