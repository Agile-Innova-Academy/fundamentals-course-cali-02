import { POPSY } from "./constant.js";
import { getData } from "./modules/getData.js";

const container = document.getElementById("containerCards");
const template = document.getElementById("template");

document.addEventListener("DOMContentLoaded", async () => {
  const result = await getData(POPSY);
  console.log(result);

  //------------Pintar la data--------------//
  result?.forEach((element) => {
    const { id, name, image } = element;
   container.innerHTML += `
        <div class="card text-center my-3" style="width: 13rem">
          <img src=${image} class="card-img-top d-block m-auto w-25" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <a class="btn d-block btn-warning" id=${id}
              ><i class="bi bi-star text-light"></i
            ></a>
          </div>
        </div>
 `
    
  });
  container.appendChild(template);
});
