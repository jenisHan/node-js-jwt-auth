const db = require("../models");
Question = db.question
Answer = db.answer
const Sequelize = require("sequelize");
CampusCategory = db.campusCategory

// // Get all questions include answers
// exports.findAll = (req, res) => {
//     return Question.findAll({
//         include: ["answers"],
//     }).then((result) => {
//         res.json(result)
//     });
// };

exports.findAll = (req, res) => {
    return Question.findAll({
        include: ["answers", "campusCategory"],
    }).then((question) => {
        res.json(question)
    });
};

// Get number of questions include answers
exports.findSomeQuestions = (req, res) => {
    return Question.findAll({
        order: [
            [Sequelize.literal('RAND()')]
        ], limit: 2,
        // include: ["answers"],
    }).then((result) => {
        res.json(result)
    });
};

// Get the answers for a given question
exports.findQuestionById = (req, res) => {
    return Question.findByPk(req.params.id, { include: ["answers"] })
        .then((result) => {
            // res.json(category)
            res.status(200).send(result);
        });
};

// Get the answers for a given answer id
exports.findAnswerById = (req, res) => {
    return Answer.findByPk(req.params.id, { include: ["question"] })
        .then((result) => {
            res.json(result)
        })
        .catch((err) => {
            console.log(">> Error while finding answer: ", err);
        });
};

// ----------***---------
// Get All Questions
exports.getAllQuestions = (req, res) => {
    Question.findAll({
    }).then(result => {
        res.status(200).send(result);
    });
};
// ----------***---------

//Get Question Onebyone
exports.getOneQuestion = (req, res) => {
    Question.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
}

// Create New Question
exports.createQuestion = (req, res) => {
    // Save Question to Database
    Question.create({
        description: req.body.description,
        campusCategoryId: req.body.campusCategoryId
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Question
exports.updateQuestion = (req, res) => {
    Question.update(
        {
            description: req.body.description,
            campusCategoryId: req.body.campusCategoryId
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};

// Delete Question
exports.deleteQuestion = async (req, res) => {
    try {
        const postDelete = await Question.destroy({ where: { id: req.params.id } });
        res.json(postDelete)
    } catch (error) {
        console.log(error)
    }
};