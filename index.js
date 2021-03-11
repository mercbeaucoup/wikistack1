const express = require("express");
const app = express();
const wikiRouter = require('./routes/wiki')
const usersRouter = require('./routes/users')
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
// const { Sequelize } = require("sequelize/types");

db.authenticate().then(() => {
  console.log("connected to the database");
});

app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use('/wiki', wikiRouter)


app.get("/", (req, res, next) => {
  try {
    res.redirect('/wiki')
  }
  catch(err) {
    next(err)
  }
});

app.use('/', (req, res) => {
  res.status(404).send('404 Page Not Found')
})


const init = async () => {
  await db.sync({ force: true })
  // await Page.sync();
  // await User.sync();
  app.listen(port, () => console.log(`We have our port set up in ${port}!`));
};

init();
