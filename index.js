const express = require("express");
const app = express();
const {
  addPage,
  editPage,
  main,
  userList,
  userPages,
  wikiPage,
} = require("./views/index");
const layout = require("./views/layout");

const port = 3000;
const morgan = require("morgan");
const { db, Page, User } = require("./models");
const { Sequelize } = require("sequelize/types");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(layout(""));
});

const init = async () => {
  await Page.sync();
  await User.sync();
  app.listen(port, () => console.log(`We have our port set up in ${port}!`));
};

init();
