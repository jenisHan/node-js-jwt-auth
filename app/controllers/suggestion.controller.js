const db = require("../models");
Suggestion = db.suggestion;

//Get All Suggestions
exports.allSuggestions = (req, res) => {
    Suggestion.findAll({
    }).then(result => {
        res.status(200).send(result)
    });
};

//Get Suggestion
exports.getSuggestion = (req, res) => {
    Suggestion.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.status(200).send(result)
    })
  }

// Create New Suggestion
exports.createSuggestion = (req, res) => {
    // Save Suggestion to Database
    Suggestion.create({
        name: req.body.name,
        description: req.body.description,
        contact_number: req.body.contact_number,
        attach_url: req.body.attach_url
    })
        .then(suggestion => {
            res.status(200).send(suggestion);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Suggestion
exports.updateSuggestion = (req, res) => {
    Suggestion.update(
        {
            name: req.body.name,
            description: req.body.description,
            contact_number: req.body.contact_number,
            attach_url: req.body.attach_url
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};

// Delete Suggestion
exports.deleteSuggestion = async (req, res) => {
    try {
        const postDelete = await Suggestion.destroy({ where: { id: req.params.id } });
        res.json(postDelete)
    } catch (error) {
        console.log(error)
    }
};
