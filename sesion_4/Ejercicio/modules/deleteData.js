export const deleteData = async (url, id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then((response) =>
      response && response.status === 200 && alert("Elemento eliminado exitosamente")
    )
  } catch (error) {
    console.error("------>>>Ocurrió un error al realizar la solicitud DELETE: " + error)
  }
};
