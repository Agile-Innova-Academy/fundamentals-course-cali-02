export function sumar(arr) {
  let result = 0;

  arr.forEach((value) => {
    result += value
  })

  return result;
}

export function restar(num1, num2) {
  return num1 - num2
}

export function multiplicar(num1, num2) {
  return num1 * num2
}

export function dividir(num1, num2) {
  return num1 / num2
}