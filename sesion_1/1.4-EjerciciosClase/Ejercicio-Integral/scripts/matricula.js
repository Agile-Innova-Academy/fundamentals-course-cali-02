const form = document.getElementById("formMa");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  let arrysMatricula = JSON.parse(localStorage.getItem("matricula")) || [];
  //------lo que ingreso el usuario
  const nombreMateria = document.getElementById("nombre").value;
  const doc = document.getElementById("doc").value;

  console.log(nombreMateria, doc);
  //--- traerme lo que tengo en localstorage MAteria y el estudiante
  const materia = JSON.parse(localStorage.getItem("materia"));
  const estudiant = JSON.parse(localStorage.getItem("estudiante"));

  console.log(estudiant, materia);

  //---- busqueda y comparar doc incluya a un estudiante guardados

  const busquedaDoc = estudiant.find((filtrar) => filtrar.documento === doc);

  //------ buscar que el nombre materia coincida con una materia registrada

  const busquedaMate = materia.find((filtrar) =>
    filtrar.nombre.includes(nombreMateria)
  );

  console.log(busquedaDoc, busquedaMate);

  // Validar para crear la matricula
  if (busquedaDoc !== undefined && busquedaMate !== undefined) {
    let matricula = {
      Estudiante: busquedaDoc,
      Materia: busquedaMate,
    };
    arrysMatricula.push(matricula);

    localStorage.setItem("matricula", JSON.stringify(arrysMatricula));
        alert("Matricula Creada");
  } else {
    alert("Estudiante o Asignatura incorrecta");
  }
});
