import User from "../models/users.model.js";

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
  getUsers,
  getUser,
};
