const { Game, User } = require("../models/index");

exports.addGame = async (req, res) => {
  try {
    const game = new Game(req.body);
    await game.save();
    res.status(200).send({ game: game, message: "add game success" });
  } catch (error) {
    res.status(500).send({ err: error });
  }
};

exports.findGame = async (req, res) => {
  try {
    const list = await Game.find(req.params.name);
    res.status(200).send(list);
  } catch (error) {
    res.status(500).send({ err: error });
  }
};
exports.updateGame = async (req, res) => {
  try {
    const update = await Game.updateOne(
      { name: req.params.name },
      {
        name: req.body.name,
        genre: req.body.genre,
        release_date: req.body.release_date,
      }
    );
    res.status(200).send(update);
  } catch (error) {
    res.status(500).send({ err: error });
  }
};

exports.deleteGame = async (req, res) => {
  try {
    const del = await Game.deleteOne(req.params.name);
    res.status(200).send(del);
  } catch (error) {
    res.status(500).send({ err: error });
  }
};

exports.addUser = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).send({ user: user });
  } catch (error) {
    res.status(500).send({ err: error });
  }
};

exports.findUser = async (req, res) => {
  try {
    res.status(200).send(req.user);
  } catch (error) {
    res.status(502).send(error);
  }
};
