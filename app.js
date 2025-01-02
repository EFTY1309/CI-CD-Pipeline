const express = require("express");
const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World this is a practice for CICD!");
});

app.get("/about", (req, res) => {
  res.send("This is the About page!");
});

module.exports = app; // Export the app, not the server
