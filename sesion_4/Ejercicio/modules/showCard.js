import { deleteData } from "./deleteData.js";
import { patchData } from "./patchData.js";

const endpointUrl = "http://localhost:3000/heroes"

export const showCard = (contenedor, datos) => {
  contenedor.innerHTML = ''
  datos.forEach((heroe) => {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('card');
    heroDiv.style.width = '18rem';

    heroDiv.innerHTML = `
       <img src=${heroe.image} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${heroe.superhero}</h5>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Nombre: ${heroe.alter_ego}</li>
            <li class="list-group-item">1ra Aparición: ${heroe.first_appearance}</li>
            <li class="list-group-item">Publicante: ${heroe.publisher}</li>
          </ul>
          <div class="card-body">
            <button type="button" id=${heroe.id} class="btn btn-primary editButton" data-bs-toggle="modal" data-bs-target="#modal${heroe.id}">Editar</button>
            <button type="button" id=${heroe.id} class="btn btn-danger deleteButton">Eliminar</button>
          </div>

          <div class="modal fade" id="modal${heroe.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Editando ${heroe.superhero}</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form class="updateHeroesForm">
                      <div class="inputForm">
                        <label for="editComicName${heroe.id}">Nombre comic</label>
                        <input type="text" id="editComicName${heroe.id}" />
                      </div>
                      <div class="inputForm">
                        <label for="editHeroName${heroe.id}">Nombre del héroe</label>
                        <input type="text" id="editHeroName${heroe.id}" />
                      </div>
                      <div class="inputForm">
                        <label for="editPublisher${heroe.id}">Publicador</label>
                        <input type="text" id="editPublisher${heroe.id}" />
                      </div>
                      <div class="inputForm">
                        <label for="editAlter_ego${heroe.id}">Nombre real</label>
                        <input type="text" id="editAlter_ego${heroe.id}" />
                      </div>
                      <div class="inputForm">
                        <label for="editFirst_appearance${heroe.id}">Primera aparición</label>
                        <input type="text" id="editFirst_appearance${heroe.id}" />
                      </div>
                      <div class="inputForm">
                        <label for="editImage${heroe.id}">Imagen</label>
                        <input type="text" id="editImage${heroe.id}" />
                      </div>
                      <div id="btnContainer">
                        <button type="submit">Actualizar héroe</button>
                      </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
    `

    // Código para cargar valores iniciales en el formulario para Editar
    const editButton = heroDiv.querySelector('.editButton');

    editButton.addEventListener('click', (e) => {
      const edittingHero = datos.find((hero) => hero.id === e.target.id);
  
      document.getElementById(`editComicName${heroe.id}`).value = edittingHero.name;
      document.getElementById(`editHeroName${heroe.id}`).value = edittingHero.superhero;
      document.getElementById(`editPublisher${heroe.id}`).value = edittingHero.publisher;
      document.getElementById(`editAlter_ego${heroe.id}`).value = edittingHero.alter_ego;
      document.getElementById(`editFirst_appearance${heroe.id}`).value = edittingHero.first_appearance;
      document.getElementById(`editImage${heroe.id}`).value = edittingHero.image;
    })

    // Código para actualizar cada tarjeta

    const editForm = heroDiv.querySelector('.updateHeroesForm')

    editForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const newValues = {
        name: document.getElementById(`editComicName${heroe.id}`).value,
        superhero: document.getElementById(`editHeroName${heroe.id}`).value,
        publisher: document.getElementById(`editPublisher${heroe.id}`).value,
        alter_ego: document.getElementById(`editAlter_ego${heroe.id}`).value,
        first_appearance: document.getElementById(`editFirst_appearance${heroe.id}`).value,
        image: document.getElementById(`editImage${heroe.id}`).value
      }

      patchData(endpointUrl, heroe.id, newValues)
    })

    // Código para eliminar tarjetas

    const deleteButton = heroDiv.querySelector('.deleteButton');

    deleteButton.addEventListener('click', (e) => {
      deleteData(endpointUrl, e.target.id);
    })
    


    contenedor.appendChild(heroDiv)
  })
}