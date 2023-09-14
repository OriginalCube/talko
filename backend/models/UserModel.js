const mongoose = require("mongoose");

const Schema = new mongoose.Schema({
  username: String,
  password: String,
  birthdate: Date,
  email: String,
});

module.exports = mongoose.model("vc-users", Schema);
