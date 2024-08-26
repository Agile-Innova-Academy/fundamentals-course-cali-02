export const getData = async () => {
  try {
    const respuesta = await fetch('http://localhost:3003/heroes')
    const data = await respuesta.json();
    return data;
  } catch (error) {
    console.error("Ocurrió un error al realizar la petición GET: " + error)
  }
}