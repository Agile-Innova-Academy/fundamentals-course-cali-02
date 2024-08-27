export const deleteData = async (url, id) => {
  try {
    await fetch(`${url}/${id}`, {
      method: "DELETE",
    }).then(alert("Objeto Eliminado exitosamente"));
  } catch (error) {
    console.log(error);
  }
};
