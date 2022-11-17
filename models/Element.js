const mongoose = require("mongoose");

const ElementSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
  },
  phone: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: [true, "please provide a email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "Please enter a valid email",
    ],
  },
  hobbies: {
    type: String,
    required: true,
  },
});

const Element = mongoose.model("Element", ElementSchema);

module.exports = Element;
