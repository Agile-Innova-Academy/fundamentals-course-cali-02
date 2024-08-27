import { USER } from "./constant.js";
import { getData } from "./modules/getData.js";

const form = document.getElementById("formulario");
form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Traerme el json de usuarios para validar y buscar que el emil y el pass existan

  const response = await getData(USER);
  console.log(response, email, password);
  const result = response.find(
    (user) => user.email === email && user.password === password
  );

  if (result !== undefined) {
    sessionStorage.setItem("profile", JSON.stringify(result));
    window.location.href =
      "../../../../sesion_5/5.1-Axios/Ejercicio/pages/home.html";
  } else {
    alert("Emil o Password Incorrectos");
  }
});
