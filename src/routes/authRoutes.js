const express = require("express");
const passport = require("passport");
const { register, login, logout } = require("../controllers/authController");
const router = express.Router();

// Email/Password Authentication
router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

// Google OAuth      //clientId is required
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { session: false }), (req, res) => {
  res.json({ message: "Google login successful" });
});

module.exports = router;
