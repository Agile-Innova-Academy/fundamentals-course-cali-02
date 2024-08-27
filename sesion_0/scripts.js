const arrayProductos = [
  {
    nombre: "Buzo de algodón",
    imagen: "./assets/Buzo.png",
    precio: 25000,
    descripcion:
      "Después de los eventos en casa, la familia Abbott ahora se enfrenta a los terrores del mundo exterior. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.",
    tallas: ["XS", "S", "L"],
  },
  {
    nombre: "Camiseta de algodón",
    imagen: "./assets/camiseta.png",
    precio: 50000,
    descripcion:
      "Después de los eventos en casa, la familia Abbott ahora se enfrenta a los terrores del mundo exterior. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.",
    tallas: ["XS", "S", "M"],
  },
  {
    nombre: "Tenis Deportivos",
    imagen: "./assets/tennis.png",
    precio: 250000,
    descripcion:
      "Después de los eventos en casa, la familia Abbott ahora se enfrenta a los terrores del mundo exterior. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.",
    tallas: ["37", "40", "42"],
  },
  {
    nombre: "Tenis Deportivos Otros",
    imagen: "./assets/calzado.png",
    precio: 250000,
    descripcion:
      "Después de los eventos en casa, la familia Abbott ahora se enfrenta a los terrores del mundo exterior. Obligados a aventurarse en lo desconocido, se dan cuenta de que las criaturas que cazan por el sonido no son las únicas amenazas que acechan más allá del camino de arena.",
    tallas: ["35", "41", "43"],
  },
];

//----------Mostrar el arreglo-----------------//

document.addEventListener("DOMContentLoaded", function () {
  const mostrar = document.getElementById("resultMostrar");
  const form = document.getElementById("form");

  const arrayLocal =
    JSON.parse(localStorage.getItem("productos")) || arrayProductos;
   
  arrayLocal.forEach((element) => {
    const { nombre, imagen, precio } = element;
    let card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
        <img src=${imagen} alt="imagen"/>
        <h4>${nombre}</h4>
        <p>${precio}</p>
        `;
    mostrar.appendChild(card);
  });



  console.table("Arreglo inicial", arrayProductos);

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const imagen = document.getElementById("imagen").value;
    const precio = document.getElementById("precio").value;
    const descripcion = document.getElementById("des").value;
    const t1 = document.getElementById("t1").value;
    const t2 = document.getElementById("t2").value;
    const t3 = document.getElementById("t3").value;

    let objProducto = {
      nombre,
      imagen,
      precio,
      descripcion,
      tallas: [t1, t2, t3],
    };

    console.log(objProducto);

    arrayLocal.push(objProducto);
    localStorage.setItem("productos", JSON.stringify(arrayLocal));
  });
  console.table("Arreglo final", arrayProductos);
});
