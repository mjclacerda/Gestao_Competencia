import User from "../models/users.model.js";

async function insertUser(user) {
  try {
    return await User.create(user);
  } catch (err) {
    throw err;
  }
}

async function getUsers() {
  try {
    return await User.findAll();
  } catch (err) {
    throw err;
  }
}

async function getUser(id) {
  try {
    return await User.findByPk(id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertUser,
  getUsers,
  getUser,
};
