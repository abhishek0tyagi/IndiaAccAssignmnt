const User = require("../models/user");

// View/Edit Profile
exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.userId).select("-password");
  res.status(200).json(user);
};

exports.updateProfile = async (req, res) => {
  const { name } = req.body;
  if(!name)
  {
    res.status(400).json({ message: "Name Required" });

  }
  const user = await User.findByIdAndUpdate(req.user.userId, { name }, { new: true });
  res.status(200).json(user);
};

// Follow/Unfollow
exports.followUser = async (req, res) => {
  const userId = req.user.userId;
  const { followId } = req.body;
  const user = await User.findByIdAndUpdate(userId, { $addToSet: { following: followId } });
  await User.findByIdAndUpdate(followId, { $addToSet: { followers: userId } });

  res.status(200).json({ message: "Followed successfully" });
};

exports.unfollowUser = async (req, res) => {
  const userId = req.user.userId;
  const { followId } = req.body;

  const user = await User.findByIdAndUpdate(userId, { $pull: { following: followId } });
  await User.findByIdAndUpdate(followId, { $pull: { followers: userId } });

  res.status(200).json({ message: "Unfollowed successfully" });
};
