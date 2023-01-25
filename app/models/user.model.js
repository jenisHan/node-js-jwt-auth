module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    gender: {
      type: Sequelize.STRING
    },
    birthday: {
      type: Sequelize.DATEONLY
    },
    password: {
      type: Sequelize.STRING
    }
  });

  return User;
};
