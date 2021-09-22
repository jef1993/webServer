const { Router } = require("express");
const gameRouter = Router();

const {
  addGame,
  findGame,
  updateGame,
  deleteGame,
  addUser,
  findUser,
} = require("../controllers/index");

const {
  testMiddle,
  hashPassword,
  decryptPassword,
} = require("../middleware/index");

gameRouter.post("/", testMiddle, addGame);
gameRouter.get("/:name", findGame);
gameRouter.put("/:name", updateGame);
gameRouter.delete("/:name", deleteGame);
gameRouter.post("/user", hashPassword, addUser);
gameRouter.post("/user/login", decryptPassword, findUser);

module.exports = gameRouter;
