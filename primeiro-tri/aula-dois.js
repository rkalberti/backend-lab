// VARIÁVEIS

// TIPOS DE DECLARAÇÃO
// const é para valor fixo
// let pode ser alterado e é local 
// var é global

const v1 = 1500
const v2 = "2"
let resultado



// CONVERSÃO DE TIPOS
// v2 é string - converter para número
// Number() transforma string em number

const soma = v1 + Number(v2)



// OPERAÇÕES MATEMÁTICAS

const sub = v1 - v2
const mul = v1 * v2
const div = v1 / v2


console.log("A soma é: " + soma)
console.log("A subtração é: " + sub)
console.log("A multiplicação é: " + mul)
console.log("A divisão é: " + div)




// CUIDADOS IMPORTANTES
// Soma com string (SEM conversão)
console.log(1500 + "2") // "15002" (concatenação)

// Outras operações funcionam normalmente
console.log(1500 - "2") // 1498
console.log(1500 * "2") // 3000
console.log(1500 / "2") // 750




// EXEMPLO 


console.log(`Soma: ${soma}`)
console.log(`Subtração: ${sub}`)
console.log(`Multiplicação: ${mul}`)
console.log(`Divisão: ${div}`)





// EXEMPLO PROFESSOR 

const v1 = 1500
const v2 = "2"

const soma = v1 + Number(v2)
const sub = v1 - v2
const mul = v1 * v2
const div = v1 / v2

console.log("A soma é: " + soma)
console.log("A subtração é: " + sub)
console.log("A multiplicação é: " + mul)
console.log("A divisão é: " + div)