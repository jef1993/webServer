const mongoose = require("mongoose");

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: Array,
  },
  release_date: {
    type: Date,
    required: true,
  },
});

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
});

const Game = mongoose.model("Game", gameSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
  Game,
  User,
};
