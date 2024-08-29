export const searchData = (input, data) => {
  const result = data.filter((element) => element.superhero.toLowerCase().includes(input.toLowerCase()))
  return result;
}