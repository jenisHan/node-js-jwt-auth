const db = require("../models");
Answer = db.answer
Question = db.question;

// Get All Answers
exports.findAnswersByQuestionId = (req, res) => {
    return Question.findByPk(req.params.id, { include: ["answers"] })
        .then((question) => {
            res.status(200).send(question);
        });
};

// Get All Answers
exports.getAllAnswers = (req, res) => {
    Answer.findAll({
    }).then(result => {
        res.status(200).send(result);
    });
};


//Get Answer Onebyone
exports.getOneAnswer = (req, res) => {
    Answer.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.status(200).send(result)
        })
}

// Create New Answer
exports.createAnswer = (req, res) => {
    // Save Answer to Database
    Answer.create({
        description: req.body.description,
        result: req.body.result,
        questionId: req.body.questionId
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Answer
exports.updateAnswer = (req, res) => {
    Answer.update(
        {
            description: req.body.description,
            result: req.body.result
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};

// Delete Answer
exports.deleteAnswer = async (req, res) => {
    try {
        const postDelete = await Answer.destroy({ where: { id: req.params.id } });
        res.json(postDelete)
    } catch (error) {
        console.log(error)
    }
};