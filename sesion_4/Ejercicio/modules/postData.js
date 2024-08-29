export const postData = async (data) => {
  try {
    await fetch (
      'http://localhost:3000/heroes',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        }
      }
    ).then((response) =>
      //Forma alternativa para representaciones lógicas
      response && response.status === 201 && alert("Elemento creado exitosamente")
      //Forma if
      // if (response && response.status === 201) {
      //   alert("Elemento creado exitosamente")
      // }
    )
  } catch (error) {
    console.error("------>>>Ocurrió un error al realizar la solicitud POST: " + error)
  }
}