import { getPokemon } from "../modules/getPokemon.js"
import { showNavbar } from "../modules/navbar.js"

document.addEventListener('DOMContentLoaded', () => {
  showNavbar(document.getElementById('navbarSection'))
})

getPokemon()