const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
// Load Routes
const auth = require("./routes/auth");
const app = express();
const port = process.env.PORT || 5000;

// Index Page
app.get("/", (req, res) => {
  res.send("Worked!");
});
// Passport Config
require("./config/passport")(passport);
// Use routes
app.use("/auth", auth);
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
