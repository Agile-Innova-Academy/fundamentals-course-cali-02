export const deleteData = async (url) => {
  try {
  await axios.delete(url);
    alert("Se Eliminó exitosamente");   
    sessionStorage.clear()
    window.location.href="../../../../../sesion_5/5.1-Axios/Ejercicio/index.html"
  } catch (error) {
    console.error(error);
  }
};
