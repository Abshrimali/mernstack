// server.js
const express = require("express");
const cors = require("cors");
// Remove the { default: ... } syntax

const db = require("./src/config/db.js");
const { userRouter } = require("./src/routes/userRoutes.js");

const app = express();

app.use(express.json()); 
app.use(cors()); 

// Mount the routes
app.use("/", userRouter); // Best practice: prefix routes with /users

db(); // Connect to MongoDB

app.listen(5000, () => console.log("Server running on port 5000"));
