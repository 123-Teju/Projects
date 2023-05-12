const User = require("../models/User");

module.exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json(users);
  } catch (err) {
    return res
      .status(500)
      .json({ error: { message: "internal server error" } });
  }
};
