export const showNavbar = (cont) => {
  cont.innerHTML = `
     <nav>
      <ul>
        <li><a href="./index.html">Home</a></li>
        <li><a href="./buscar.html">Buscar Pokémon</a></li>
        <li><a href="./listar.html">Listar Pokémon</a></li>
      </ul>
    </nav>
  `
}