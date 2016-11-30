export const presentRole = (role) => {
  const roleMap = {
    ADMIN: "Administrador",
    CLIENT: "Cliente"
  }

  return roleMap[role]
}