import { POPSY } from "./constant.js";
import { getData } from "./modules/getData.js";
import { viewCardPopsy } from "./modules/viewCardPopsy.js";

const container = document.getElementById("containerCards");

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getData(POPSY);
  console.log(result);

   viewCardPopsy(container, result);
  //------------Pintar la data--------------//


  
});
