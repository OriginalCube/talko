const UserModel = require("../models/UserModel");

const create = async (req, res) => {
  const { username, password, birthdate, email } = req.body;

  if (!username || !password) {
    res.status(400).json({ message: "No credentials received" });
  }

  const createAccount = await UserModel.create({
    username: username,
    password: password,
    birthdate: birthdate,
    email: email,
  });

  if (createAccount) {
    res.status(201).json({ message: "Account creation successful login now." });
  } else {
    res.status(400).json({ message: "Account creation unsuccessful." });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  const userExist = await UserModel.findOne({
    username: username,
    password: password,
  });

  if (userExist) {
    res.status(200).json(userExist);
  } else {
    res.status(201).json({ message: "User does not exist." });
  }
};

const Controller = { create, login };

module.exports = Controller;
