function retornaDez(callbackFunction) {
  //Logica maluca blablabla
  const x = 10
  return callbackFunction(x)
}

const somaComDez = (num) => {
  const resultado = retornaDez((key) => {
    return num + dez
  })

  return resultado;
}

console.log(somaComDez(10))

const form = document.querySelector(".form")
form.addEventListener("submit", (event) => {
  event.preventDefault()
})

function addEventListener(typeEvent, callbackFunciton) {
  const event = "EVENTO"
  if (typeEvent === "submit") {
    return callbackFunciton(event)
  }
}