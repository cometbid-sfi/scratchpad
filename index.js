var express = require("express");
var app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Only create server if not in test environment
const server = app.listen(3000);

module.exports = { app, server };
