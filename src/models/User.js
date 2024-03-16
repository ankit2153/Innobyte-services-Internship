// user.model.js

const mongoose = require("mongoose");

// Connect to MongoDB

// Define user schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Create User model
const User = mongoose.model("User", userSchema);

module.exports = User;
