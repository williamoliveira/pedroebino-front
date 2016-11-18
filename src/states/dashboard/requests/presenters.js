export const presentStatus = (status) => {
  const map = {
    PENDING: "Aberto",
    DEFINED: "Definido",
    COMPLETED: "Concluído",
    CANCELED: "Cancelado",
  }

  return map.hasOwnProperty(status) ? map[status] : status
}

export const presentCity = (city) => {
  return `${city.name} (${city.state.initials})`
}

export const staticMapUrl = (request, size = '400x200') => {
  return encodeURI(`http://maps.googleapis.com/maps/api/staticmap?size=${size}&path=enc:${request.overviewPolyline}`)
}