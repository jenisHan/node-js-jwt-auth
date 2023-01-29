const db = require("../models");
Suggestion = db.suggestion;
User = db.user;

// Get all users include suggestions
exports.findAll = (req, res) => {
    return User.findAll({
        include: ["suggestions"],
    }).then((users) => {
        res.json(users)
    });
};

// Get the suggestions for a given user id
exports.findSuggestionById = (req, res) => {
    return User.findByPk(req.params.id, { include: ["suggestions"] })
        .then((user) => {
            res.status(200).send(user);
        });
};

// Get the user for a given suggestion id
exports.findUserById = (req, res) => {
    return Suggestion.findByPk(req.params.id, { include: ["user"] })
        .then((suggestion) => {
            res.json(suggestion)
        })
        .catch((err) => {
            console.log(">> Error while finding suggestion: ", err);
        });
};


//Get All Suggestions
exports.getAllSuggestions = (req, res) => {
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
exports.createSuggestion = async (req, res) => {

    // Save Suggestion to Database
    Suggestion.create({
        name: req.body.name,
        description: req.body.description,
        contact_number: req.body.contact_number,
        attach_url: req.body.attach_url,
        draft: req.body.draft
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
            attach_url: req.body.attach_url,
            draft: req.body.draft
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
