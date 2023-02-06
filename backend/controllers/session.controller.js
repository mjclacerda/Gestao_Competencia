import pkg from "bcryptjs";
import pkgtoken from "jsonwebtoken";
import Users from "../models/users.model.js";

async function create(req, res, next) {
  let { username, password } = req.body;
  const user = await Users.findOne({
    where: { username: username },
  });
  if (!user) {
    return res.status(400).json({ error: "User not found!" });
  }
  const matchPassword = await pkg.compare(password, user.password);
  if (!matchPassword) {
    return res.status(400).json({ error: "Incorrect password or username!" });
  }
  const token = pkgtoken.sign({}, "9e7f596b4734803296c434a33dceea05", {
    subject: String(user.userId),
    expiresIn: "1d",
  });
  const { userId, name, permissionId } = user;
  res.send({ name, username, userId, token, permissionId });
}

export default {
  create,
};
