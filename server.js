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

  // Find our form in the DOM using its class name.
const form = document.getElementByClassName('.contact-form')[0];

// Get the form data with our (yet to be defined) function.
const data = getFormDataAsJSON(form);

// Do something with the email address.
//doSomething(data.email);