export const patchData = async (url, id, obj) => {
  try {
    await fetch(`${url}/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((response) =>
      response && response.status === 200 && alert("Elemento modificado exitosamente")
    )
  } catch (error) {
    console.error("------>>>Ocurrió un error al realizar la solicitud PATCH: " + error)
  }
}
