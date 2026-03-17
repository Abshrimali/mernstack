// src/config/db.js
const mongoose = require("mongoose");
const db = () => {
  mongoose
    .connect("mongodb://localhost:27017/myDatabase")
    .then(() => console.log("Connected to MongoDB"))
    .catch((error) => console.log("Failed to connect to MongoDB", error));
};

module.exports = db;
