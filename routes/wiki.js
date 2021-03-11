const express = require("express");
const wikiRouter = express.Router();
const { addPage } = require("../views");
const { Page } = require("../models");

wikiRouter.get("/", async (req, res, next) => {
  res.send("testing");
});

wikiRouter.post("/", async (req, res, next) => {
  //res.json(req.body);
  const title = req.body.title;
  const content = req.body.content;

  try {
    const page = await Page.create({
      title: title,
      content: content,
    });

    // make sure we only redirect *after* our save is complete! Don't forget to `await` the previous step. `create` returns a Promise.
    res.redirect("/");
  } catch (error) {
    next(error);
  }
});

wikiRouter.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = wikiRouter;
