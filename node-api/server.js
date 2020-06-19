// api
const express = require("express");
// initializing express
const app = express();
// base route
app.get("/", (req, res) => {
  res.send("hello bro");
});
// start server on port
app.listen(3001);
