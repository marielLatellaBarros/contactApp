var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello - dit is express!");
});

app.listen(3000);
console.log("Express server gestart op localhost:3000");
