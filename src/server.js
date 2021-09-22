require("./db/connection");
const express = require("express");
const app = express();
const cors = require("cors");
const gameRouter = require("./routes/index");

app.use(express.json());
app.use(cors());

app.use(gameRouter);

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
