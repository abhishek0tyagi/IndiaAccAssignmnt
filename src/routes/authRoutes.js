const express = require("express");
const passport = require("passport");
const { register, login, logout } = require("../controllers/authController");
const router = express.Router();

// Email/Password Authentication
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
