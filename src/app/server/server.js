var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello - dit is express!");
});

// 2. JSON retour zenden
let persoon = {
  voornaam: "Peter",
  achternaam: "Kassenaar",
};
app.get("/json", function (req, res) {
  res.json(persoon);
});

app.listen(3000);
console.log("Express server gestart op localhost:3000");
