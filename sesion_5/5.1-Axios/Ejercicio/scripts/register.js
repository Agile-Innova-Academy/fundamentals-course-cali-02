import { USER } from "./constant.js";
import { postData } from "./modules/postData.js";

const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let objUser = {
    id: Math.floor(Math.random() * 100),
    name,
    email,
    password,
  };
  console.log(objUser);


  
  postData(USER, objUser)
});
