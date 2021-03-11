const Sequelize = require("sequelize");
const db = new Sequelize("postgres://localhost:5432/wikistack");

const Page = db.define("pages", {
  title: {
    type: Sequelize.STRING,
  },
  slug: {
    type: Sequelize.STRING,
  },
  content: {
    type: Sequelize.TEXT,
  },
  status: {
    states: {
      type: Sequelize.ENUM,
      values: ["open", "closed"],
    },
  },
});

const User = db.define("users", {
  name: {
    type: Sequelize.STRING,
    // allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    // allowNull: false,
    // unique: true
  },
});

module.exports = {
  db,
  Page,
  User,
};
