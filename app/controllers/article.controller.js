const db = require("../models");
Article = db.article
ArticleCategory = db.articleCategory

// Get all Categories include article
exports.findAll = (req, res) => {
  return ArticleCategory.findAll({
    include: ["articles"],
  }).then((articleCategories) => {
    res.json(articleCategories)
  });
};

// Get the articles for a given category id
exports.findArticleCategoryById = (req, res) => {
  return ArticleCategory.findByPk(req.params.id, { include: ["articles"] })
    .then((article) => {
      // res.json(category)
      res.status(200).send(article);
    });
};

// Get the article for a given article id
exports.findArticleById = (req, res) => {
  return Article.findByPk(req.params.id, { include: ["articleCategory"] })
    .then((article) => {
      res.json(article)
    })
    .catch((err) => {
      console.log(">> Error while finding article: ", err);
    });
};

//Get All Categories
exports.getAllCategories = (req, res) => {
  ArticleCategory.findAll({
  }).then(result => {
    res.status(200).send(result);
  });
};

//Get Category Onebyone
exports.getOneCategory = (req, res) => {
  ArticleCategory.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(result => {
      res.status(200).send(result)
    })
}

//Create New Category
exports.createCategory = (req, res) => {
  //save new category to database
  ArticleCategory.create({
    title: req.body.title,
    description: req.body.description,
  })
    .then(result => {
      res.status(200).send(result);
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

//Update Category
exports.updateCategory = (req, res) => {
  ArticleCategory.update(
    {
      title: req.body.title,
      description: req.body.description,
    }, {
    where: {
      id: req.params.id
    },
  }).then(result => {
    res.status(200).send(result);
  });
};

//Delete Category
exports.deleteCategory = async (req, res) => {
  try {
    const postDelete = await ArticleCategory.destroy({ where: { id: req.params.id } });
    res.json(postDelete)
  } catch (error) {
    console.log(error)
  }
};

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
    // category: req.body.category
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
      // category: req.body.category
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