const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  config.DB,
  config.USER,
  config.PASSWORD,
  {
    host: config.HOST,
    dialect: config.dialect,
    operatorsAliases: false,

    pool: {
      max: config.pool.max,
      min: config.pool.min,
      acquire: config.pool.acquire,
      idle: config.pool.idle
    }
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.role = require("../models/role.model.js")(sequelize, Sequelize);
db.notification = require("../models/notification.model.js")(sequelize, Sequelize);
db.program = require("../models/program.model.js")(sequelize, Sequelize);
db.campus = require("../models/campus.model.js")(sequelize, Sequelize);
db.suggestion = require("../models/suggestion.model.js")(sequelize, Sequelize);
db.article = require("../models/article.model.js")(sequelize, Sequelize);
db.avatar = require("../models/avatar.model.js")(sequelize, Sequelize);
db.data = require("../models/data.model")(sequelize, Sequelize);

db.programCategory = require("../models/programCategory.model")(sequelize, Sequelize);
db.articleCategory = require("../models/articleCategory.model")(sequelize, Sequelize);
db.dataCategory = require("../models/dataCategory.model")(sequelize, Sequelize);
db.campusCategory = require("../models/campusCategory.model")(sequelize, Sequelize);
db.comment = require("../models/comment.model")(sequelize, Sequelize);

db.dataPurchaseHistory = require("../models/dataPurchaseHistory.model")(sequelize, Sequelize);
db.browseHistory = require("../models/browseHistroy.model")(sequelize, Sequelize);
db.question = require("../models/question.model")(sequelize, Sequelize);
db.answer = require("../models/answer.model")(sequelize, Sequelize);
db.passedTest = require("../models/passedTest.model")(sequelize, Sequelize);
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

db.programCategory.hasMany(db.program, { as: "programs" });
db.program.belongsTo(db.programCategory, {
  foreignKey: "programCategoryId",
  as: "programCategory",
});

db.articleCategory.hasMany(db.article, { as: "articles" });
db.article.belongsTo(db.articleCategory, {
  foreignKey: "articleCategoryId",
  as: "articleCategory",
});
db.user.hasMany(db.article, { as: "articles" });
db.article.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.user.hasMany(db.comment, { as: "comments" });
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
db.article.hasMany(db.comment, { as: "comments" });
db.comment.belongsTo(db.article, {
  foreignKey: "articleId",
  as: "article",
});

db.user.hasMany(db.passedTest, {as: "passedtests"});
db.passedTest.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user"
})

db.campusCategory.hasMany(db.passedTest, {as: "passedtests"});
db.passedTest.belongsTo(db.campusCategory, {
  foreignKey: "campusCategoryId",
  as: "campusCategory"
})


db.dataCategory.hasMany(db.data, { as: "datas" });
db.data.belongsTo(db.dataCategory, {
  foreignKey: "dataCategoryId",
  as: "dataCategory",
});

db.campusCategory.hasMany(db.campus, { as: "campuses" });
db.campus.belongsTo(db.campusCategory, {
  foreignKey: "campusCategoryId",
  as: "campusCategory",
});

db.user.hasMany(db.dataPurchaseHistory, { as: "dataPurchaseHistory" });
db.dataPurchaseHistory.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
db.data.hasMany(db.dataPurchaseHistory, { as: "dataPurchaseHistory" });
db.dataPurchaseHistory.belongsTo(db.data, {
  foreignKey: "dataId",
  as: "data",
});

db.user.hasMany(db.browseHistory, { as: "browseHistories" });
db.browseHistory.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});
db.campus.hasMany(db.browseHistory, { as: "browseHistories" });
db.browseHistory.belongsTo(db.campus, {
  foreignKey: "campusId",
  as: "campus",
});

// db.browseHistory.hasMany(db.user, { as: "users" });

db.user.hasMany(db.suggestion, { as: "suggestions" });
db.suggestion.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

db.question.hasMany(db.answer, { as: "answers" });
db.answer.belongsTo(db.question, {
  foreignKey: "questionId",
  as: "question",
});




module.exports = db;
