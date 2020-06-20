// api
const express = require("express");
// non-relational ORM
const mongoose = require("mongoose");
// package to ease requiring
const requireDir = require("require-dir");

// initializing express
const app = express();
// DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true, // added due to warning
});
requireDir("./src/models");

//test
const Product = mongoose.model("Product");

// base route
app.get("/", (req, res) => {
  // test
  Product.create({
    title: "React",
    description: "frontend framework",
    url: "https://reactjs.org/",
  });

  return res.send("hello bro");
});
// start server on port
app.listen(3001);
