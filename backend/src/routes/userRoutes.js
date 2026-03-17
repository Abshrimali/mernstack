const express = require("express");
const { createUser } = require("../controllers/userController.js");

const userRouter = express.Router();

userRouter.post("/createUser", createUser);

module.exports = { userRouter };
