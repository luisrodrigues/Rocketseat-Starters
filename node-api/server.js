// api
const express = require("express");
// provides middleware to enable CORS (Cross-origin resource sharing)
const cors = require("cors");
// non-relational ORM
const mongoose = require("mongoose");
// package to ease requiring
const requireDir = require("require-dir");

// initializing express
const app = express();
app.use(express.json());
app.use(cors());
// DB
mongoose.connect("mongodb://localhost:27017/nodeapi", {
  useNewUrlParser: true,
  useUnifiedTopology: true, // added due to warning
});
requireDir("./src/models");

// routes
app.use("/api", require("./src/routes"));
// start server on port
app.listen(3001);
