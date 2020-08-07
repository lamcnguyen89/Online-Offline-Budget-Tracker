const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://malneyungfl:nguyen05041989@mongodb://<dbuser>:<dbpassword>@ds331558.mlab.com:31558/heroku_bks1xvv2"

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
} );

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});