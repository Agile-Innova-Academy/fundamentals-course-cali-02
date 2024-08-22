const form = document.getElementById("formAsig");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let arraysAsig = JSON.parse(localStorage.getItem("materia")) || [];
 const nombre = e.target[0].value;
const carrera = document.getElementById("carrera").value;

  let obj = {
    nombre,
    carrera,
  };

   arraysAsig.push(obj);
  localStorage.setItem("materia", JSON.stringify(arraysAsig));
 
});
