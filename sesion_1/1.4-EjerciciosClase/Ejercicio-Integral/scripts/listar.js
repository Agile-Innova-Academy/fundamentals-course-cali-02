document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const arrysM = JSON.parse(localStorage.getItem("matricula"));
  console.log(arrysM);

  arrysM.forEach((element) => {
    const { Estudiante, Materia } = element;

    console.log(Estudiante, Materia);

    container.innerHTML += `
  <div class="card" style="width: 18rem;"> 
  <div class="card-body">
    <h5 class="card-title">Nombre Estudiante: ${Estudiante.nombre}</h5>
    <p class="card-text">Facultad:  ${Estudiante.facultad} / Carrera:${Estudiante.carrera} </p>
    <h6 class="card-text">Materia:  ${Materia.nombre}</h6>

  </div>
</div>
    `;
  });
});
