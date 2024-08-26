export const getPokemon = async (url) => {

  const data = await fetch('https://pokeapi.co/api/v2/pokemon')
  const response = await data.json()
  console.log(response)
}