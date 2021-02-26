const express = require("express");
const router = express.Router();

const AuthController = require("../controller/AuthController");

router.post("/register", AuthController.registerUser);
router.post("/login", AuthController.loginUser);
router.get("/user", AuthController.getUserDetails);

module.exports = router;
