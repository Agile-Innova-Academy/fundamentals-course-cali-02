console.log("....");

function one(callback) {
  callback();
  setTimeout(() => {
    console.log("La primera en ejecutar");
  }, 1000);
}

function two() {
  setTimeout(() => {
    console.log("La segunda en ejecutar");
  }, 2000);
  other();
}

function other() {
  setTimeout(() => {
    console.log("La Tercera en ejecutar");
  }, 500);
}

one(two);
