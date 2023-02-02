import Permission from "../models/permissions.model.js";

async function insertpermission(permission) {
  try {
    return await Permission.create(permission);
  } catch (err) {
    throw err;
  }
}

async function getPermissions() {
  try {
    return await Permission.findAll();
  } catch (err) {
    throw err;
  }
}

async function getPermission(id) {
  try {
    return await Permission.findByPk(id);
  } catch (err) {
    throw err;
  }
}

//Os tipos de permissão são criados por padrão
async function standardPermissions() {
  await Permission.create({
    name: "admin",
    description: "para o perfil de administradores do sistema",
  });
  await Permission.create({
    name: "users",
    description: "para o perfil de usuários comuns do sistema",
  });
}

export default {
  insertpermission,
  getPermissions,
  getPermission,
  standardPermissions,
};
