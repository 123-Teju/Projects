const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: Number,
      required: true,
      unique: true,
    },
    gender: {
      type: Number,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    picture: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
