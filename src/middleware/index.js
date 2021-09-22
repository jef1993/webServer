const bcrypt = require("bcryptjs");
const { User } = require("../models/index");

exports.testMiddle = (req, res, next) => {
  try {
    console.log(req.body);
    req.user = "Jeffrey";
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.hashPassword = async (req, res, next) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    req.body.password = hashedPassword;
    next();
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.decryptPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const passwordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (passwordMatch) {
      req.user = user;
      next();
    } else {
      throw new Error();
    }
  } catch (error) {
    res.status(501).send(error);
  }
};
