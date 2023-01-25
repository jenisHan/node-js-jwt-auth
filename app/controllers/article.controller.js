const db = require("../models");
Article = db.article

// Get All Articles
exports.allArticle = (req, res) => {
    Article.findAll({
    }).then(result => {
        res.status(200).send(result);
    });
};


//Get Article Onebyone
exports.oneArticle = (req, res) => {
    Article.findOne({
      where: {
        id: req.params.id
      }
    })
    .then(result => {
      res.status(200).send(result)
    })
  }

// Create New Article
exports.createArticle = (req, res) => {
    // Save Article to Database
    Article.create({
        name: req.body.name,
        description: req.body.description,
        contact_number: req.body.contact_number,
        attach_url: req.body.attach_url,
        source: req.body.source,
        category: req.body.category
    })
        .then(result => {
            res.status(200).send(result);
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

// Update Article
exports.updateArticle = (req, res) => {
    Article.update(
        {
            name: req.body.name,
            description: req.body.description,
            contact_number: req.body.contact_number,
            attach_url: req.body.attach_url,
            source: req.body.source,
            category: req.body.category
        }, {
        where: {
            id: req.params.id
        },
    }).then(result => {
        res.status(200).send(result);
    });
};

// Delete Notification
exports.deleteArticle = async (req, res) => {
    try {
      const postDelete = await Article.destroy({ where: { id: req.params.id } });
      res.json(postDelete)
    } catch (error) {
      console.log(error)
    }
  };