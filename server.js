//* Dependencies
//* =============================================================
const path = require('path');
const express = require("express");

//* Sets up the Express App
//* =============================================================
const app = express();
const PORT = 3000;

//* Sets up the Express app to handle data parsing
//* =============================================================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


let data = [];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });




//* Starts the server to begin listening
//* =============================================================
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });