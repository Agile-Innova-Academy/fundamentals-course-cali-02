import { dividir, multiplicar, restar, sumar } from "../modules/artimeticas.js"
import { showNavbar } from "../modules/navbar.js"

const formulario = document.getElementById('formulario')

document.addEventListener('DOMContentLoaded', () => {
  showNavbar(document.getElementById('navBarSection'))
})

// let numerosASumar = []
// formulario.addEventListener('submit', (e) => {
//   e.preventDefault();

//   const num1 = Number(document.getElementById('num1').value)
//   const num2 = Number(document.getElementById('num2').value)

//   numerosASumar.push(num1, num2)

//   console.log(`El resultado de la suma es: ${sumar(numerosASumar)}`)
//   console.log(`El resultado de la resta es: ${restar(num1, num2)}`)
//   console.log(`El resultado de la multiplicación es: ${multiplicar(num1, num2)}`)
//   console.log(`El resultado de la división es: ${dividir(num1, num2)}`)
// })

const multiplierCallback = (num1, num2, multiplicar) => {
  const resultado = num1 * num2;

  return setTimeout(() => {
    multiplicar(resultado)
  }, 3500)
}

const multiplierPromise = (num1, num2) => {
  const resultado = num1 * num2;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(resultado);
    }, 6000)
  })
}


multiplierCallback(4, 6, (result) => console.log('El resultado es ' + result))

multiplierPromise(12, 5).then((resultado) => console.log('El resultado es ' + resultado))

const resultadoDeLaPromesa = await multiplierPromise(4, 5)

console.log(resultadoDeLaPromesa)

// Consumo de Promesas (then, catch, finally)

const procesarPago = (msj) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(msj)
    resolve('Pago Procesado por Pasarela de Pagos')
  }, 2000)
})

const confirmarCarrito = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Carrito confirmado para realizar compra')
    resolve('Pedido Confimado')
  }, 1000)
})

const confirmarPedido = (msj) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(msj)
    resolve('Gracias por su compra!')
  }, 1000)
})

confirmarCarrito
.then(procesarPago)
.then(confirmarPedido)
.then(mensajeFinal => console.log(mensajeFinal))
.catch(err => console.log(err))
.finally(() => console.log('Compra finalizada'))