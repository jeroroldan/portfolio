const button = document.querySelector('#ejecutar')
const vacio = document.querySelector('#err')

button.addEventListener('click', calcProm)

function errMessage() {
  return (vacio.textContent = 'Flaco tenes que poner un numero')
}

function calcProm() {
  let number2 = parseInt(document.querySelector('#number2').value)
  let number3 = parseInt(document.querySelector('#number3').value)
  let promedio = 0
  let sum = 0
  if (number2) {
    for (let i = 1; i <= number2; i++) {
      sum += number3
      console.log(sum)
    }
  } else {
    err.textContent = 'Flaco tenes que poner un numero'
  }
  promedio = sum / number2
  return (resultado.textContent = promedio)
}
