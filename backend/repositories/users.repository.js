import User from "../models/users.model.js";
import pkg from "bcryptjs";

async function insertUser(user) {
  const passhash = await pkg.hash(user.password, 8);
  const userchange = {
    name: user.name,
    username: user.name,
    password: passhash,
  };
  try {
    return await User.create(userchange);
  } catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    return await User.findAll({ attributes: ["userId", "name", "username"] });
  } catch (err) {
    throw err;
  }
}

async function getUser(id) {
  try {
    return await User.findByPk(id, {
      attributes: ["userId", "name", "username"],
    });
  } catch (err) {
    throw err;
  }
}

export default {
  insertUser,
  getUsers,
  getUser,
};
