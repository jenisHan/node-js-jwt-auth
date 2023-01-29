const db = require("../models");
Answer = db.answer

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
        result: req.body.result
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