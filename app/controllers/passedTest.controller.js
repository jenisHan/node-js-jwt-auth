const { article } = require("../models");
const db = require("../models");
PassedTest = db.passedTest
BrowseHistory = db.browseHistory
User = db.user


// Get the browseHistories for a given user
exports.findPassedTestById = (req, res) => {
    PassedTest.findAll({
        include: [
            {
                model: db.campusCategory,
                as: "campusCategory",
                attributes: ['title']
            }
        ],
        where: { userId: req.params.id }
    }
    )
        .then((user) => {
            // res.json(user)
            res.status(200).send(user);
        });
};

