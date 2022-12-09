import UserRepository from "../repositories/users.repository.js";

async function getUsers() {
  const users = await UserRepository.getUsers();
  if (users) {
    return await UserRepository.getUsers();
  }
  throw new Error("Não há userulários cadastrados");
}

async function getUser(id) {
  const user = await UserRepository.getUser(id);
  if (user) {
    return await UserRepository.getUser(id);
  }
  throw new Error("O usuário procurado não existe");
}

export default {
  getUsers,
  getUser,
};
