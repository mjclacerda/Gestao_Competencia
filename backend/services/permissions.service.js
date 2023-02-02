import PermissionRepository from "../repositories/permissions.repository.js";

async function getPermissions() {
  const permissions = await PermissionRepository.getPermissions();
  if (permissions) {
    return await PermissionRepository.getPermissions();
  }
  throw new Error("Não há permissões cadastradas");
}

async function getPermission(id) {
  const permission = await PermissionRepository.getPermission(id);
  if (permission) {
    return await PermissionRepository.getPermission(id);
  }
  throw new Error("A permissão procurada não existe");
}

export default {
  getPermissions,
  getPermission,
};
