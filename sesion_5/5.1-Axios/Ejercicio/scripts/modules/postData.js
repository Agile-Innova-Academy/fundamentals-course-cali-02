export const postData = async (url, datos) => {
  try {
    await axios.post(url, datos);
    alert("Usuario creado exitosamente");
    window.location.href="../../index.html"
  } catch (error) {
    console.log("el error", error);
  }
};