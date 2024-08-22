const form = document.getElementById("formEstudiante");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);

  //   let arrayEst = JSON.parse(localStorage.getItem("estudiante"))
  //     ? (arrayEst = JSON.parse(localStorage.getItem("estudiante")))
  //     : [];

  let arrayEst = JSON.parse(localStorage.getItem("estudiante")) || [];

  const doc = document.getElementById("doc").value;
  const nombre = e.target[1].value;
  const carrera = document.getElementById("carrera").value;
  const facul = e.target[3].value;

  console.log("a guardar", doc, nombre, carrera, facul);

  let objEstudiante = {
    documento: doc,
    nombre,
    carrera,
    facultad: facul,
  };
  arrayEst.push(objEstudiante);
  localStorage.setItem("estudiante", JSON.stringify(arrayEst));
});
