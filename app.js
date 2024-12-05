const express = require("express");
const app = express();

// Define routes
app.get("/", (req, res) => {
  res.send("Hello, World this is a practice for CICD!");
});

module.exports = app; // Export the app, not the server
