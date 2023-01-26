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
db.comment = require("../models/comment.model")(sequelize, Sequelize);

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

db.user.hasMany(db.comment, { as: "comments" });
db.comment.belongsTo(db.user, {
  foreignKey: "userId",
  as: "user",
});

module.exports = db;
