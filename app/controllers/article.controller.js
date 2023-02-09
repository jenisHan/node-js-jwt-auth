const db = require("../models");
Article = db.article
ArticleCategory = db.articleCategory
const Sequelize = require("sequelize");

// Add Recommend
exports.addRecommend = (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id
    }
  }).then((selectedArticle) => {
    Article.update(
      {
        recommends: (selectedArticle.recommends + 1),
      }, {
      where: {
        id: req.params.id
      },
    }).then(result => {
      res.status(200).send(result);
    });
  });
}

// Add Opposition
exports.addOpposition = (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id
    }
  }).then((selectedArticle) => {
    Article.update(
      {
        oppositions: (selectedArticle.oppositions + 1),
      }, {
      where: {
        id: req.params.id
      },
    }).then(result => {
      res.status(200).send(result);
    });
  });
}

// Add browingCount
exports.addBrowingCount = (req, res) => {
  Article.findOne({
    where: {
      id: req.params.id
    }
  }).then((selectedArticle) => {
    Article.update(
      {
        browingcount: (selectedArticle.browingcount + 1),
      }, {
      where: {
        id: req.params.id
      },
    }).then(result => {
      res.status(200).send(result);
    });
  });
}

// Find best adding user
// exports.findTopUser = (req, res) => {
//   //   return ArticleCategory.findAll({
//   //     include: ["articles"],
//   //   }).then((result) => {
//   //     // console.log("------------------------>",result)
//   //     res.json(result)
//   //   });
//   Article.sequelize.query(`SELECT * 
//                            FROM articles
//                            LEFT JOIN users ON users.id = articles.userId
//                           WHERE browingcount IN (SELECT MAX(browingcount) FROM articles)
//                           `).then((result) => { res.json(result) })

// }

// Get top programs
exports.findTopUser = (req, res) => {
  return Article.findAll({
    group: ['userId'],
    attributes: [
      'userId',
      [Sequelize.fn('sum', Sequelize.col('recommends')), 'total_amount'],
    ],
  }).then((article) => {
    res.json(article)
    // return Program.findAll({
    //   limit: 3,
    //   order: [['recommends', 'DESC']]
    //   // include: ["programCategory"],
    // }).then((program) => {
    //   res.json(program)
    // });
  });
};


// Get all Categories include article
exports.findAll = (req, res) => {
  return ArticleCategory.findAll({
    include: ["articles"],
  }).then((articleCategories) => {
    res.json(articleCategories)
  });
};

// Get the articles for a given category
exports.findArticleCategoryById = (req, res) => {
  return ArticleCategory.findByPk(req.params.id, { include: ["articles"] })
    .then((articlecategories) => {
      // res.json(category)
      res.status(200).send(articlecategories);
    });
};

// Get the article for a given article id
exports.findArticleById = (req, res) => {
  return Article.findByPk(req.params.id, { include: ["articleCategory", "user"] })
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

// Verify New Article
exports.verifyArticle = (req, res) => {
  res.json(1)
};

// Create New Article
exports.createArticle = (req, res) => {
  // Save Article to Database
  Article.create({
    name: req.body.name,
    description: req.body.description,
    contact_number: req.body.contact_number,
    attach_url: req.body.attach_url,
    source: req.body.source
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