const express = require("express");
const { authenticate } = require("../middlewares/authMiddleware");
const { 
  getProfile, 
  updateProfile, 
  followUser, 
  unfollowUser 
} = require("../controllers/profileController");

const router = express.Router();

// Profile Management
router.get("/getProfile", authenticate, getProfile); // Get logged-in user's profile
router.put("/updateProfile", authenticate, updateProfile); // Update logged-in user's profile

// Social Features
router.post("/follow", authenticate, followUser); // Follow a user
router.post("/unfollow", authenticate, unfollowUser); // Unfollow a user

module.exports = router;
