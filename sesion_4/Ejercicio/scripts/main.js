import { getData } from "../modules/getData.js"
import { postData } from "../modules/postData.js";
import { showCard } from "../modules/showCard.js";

const heroesContainer = document.getElementById('heroesList');
const formulario = document.getElementById('heroesForm')


document.addEventListener("DOMContentLoaded", async ()=> {
  const dataHeroes = await getData();

  showCard(heroesContainer, dataHeroes);
})

console.log(crypto.randomUUID())

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const hero = {
    "id": crypto.randomUUID(),
    "name": document.getElementById('comicName').value,
    "superhero": document.getElementById('heroName').value,
    "publisher": document.getElementById('publisher').value,
    "alter_ego": document.getElementById('alter_ego').value,
    "first_appearance": document.getElementById('first_appearance').value,
    "image": document.getElementById('image').value
  }

  postData(hero);

})

