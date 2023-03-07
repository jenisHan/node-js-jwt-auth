const express = require("express");
const cors = require("cors");

const app = express();

global.__basedir = __dirname;

var corsOptions = {
  // origin: "http://localhost:8081"
  origin: "*"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// database
const db = require("./app/models");
const Role = db.role;

db.sequelize.sync();
// force: true will drop the table if it already exists
// db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// routes
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);
require('./app/routes/notification.routes')(app);
require('./app/routes/program.routes')(app);
require('./app/routes/campus.routes')(app);
require("./app/routes/suggestion.routes")(app);
require("./app/routes/degree.routes")(app);
require("./app/routes/article.routes")(app);
require("./app/routes/avatar.routes")(app);
require("./app/routes/setting.routes")(app);
require("./app/routes/media.routes")(app);
require("./app/routes/data.routes")(app);
require("./app/routes/comment.routes")(app);
require("./app/routes/dataPurchaseHIstory.routes")(app);
require("./app/routes/browseHistory.routes")(app);
require("./app/routes/profile.routes")(app);
require("./app/routes/answer.routes")(app);
require("./app/routes/question.routes")(app);
require("./app/routes/passedTest.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });

  Role.create({
    id: 2,
    name: "moderator"
  });

  Role.create({
    id: 3,
    name: "admin"
  });
}