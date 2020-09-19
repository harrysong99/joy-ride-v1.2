// here we will pull in our requried dependencies
// create a schema to represent a user, defining fields and types as objects of the Schema
// export the model so we can access it outside of this file

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// create schema
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  serviceTime: {
    type: Number,
    required: true,
  },
  driver: {
    type: Boolean,
    required: true,
  },
  location: {
    type: Number,
    required: true,
  },
});

module.exports = user = mongoose.model("users", userSchema);
