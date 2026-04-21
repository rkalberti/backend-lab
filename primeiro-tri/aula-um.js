// TIPAGEM DE DADOS NO JAVASCRIPT

// Não precisamos declarar o tipo da variável
// O próprio JS define automaticamente


// DECLARAÇÃO DE VARIÁVEIS

const nome = "Patrick" //const e valor "fixo"
let idade = 16        // let pode mudar valor    
let altura = 1.70
let estuda = true



// TIPOS DE DADOS PRIMITIVOS
// string → texto
// number → números (inteiro e decimal)
// boolean → true ou false




console.log("nome:", typeof nome)       // string
console.log("idade:", typeof idade)     // number
console.log("altura:", typeof altura)   // number
console.log("estuda:", typeof estuda)   // boolean




// TIPAGEM DINÂMICA (IMPORTANTE)

// A variável pode mudar de tipo
let exemplo = 10        // number
console.log(typeof exemplo)

exemplo = "agora sou texto" // string
console.log(typeof exemplo)




// CUIDADOS IMPORTANTES
// array → considerado "object"

let lista = [1, 2, 3]
console.log(typeof lista)





// COMPARAÇÕES (MUITO IMPORTANTE)
// ==  compara só valor

console.log(5 == "5") // true

// ===  compara valor + tipo
console.log(5 === "5") // false





// EXEMPLO

console.log(`O nome é do tipo: ${typeof nome}`)
console.log(`A idade é do tipo: ${typeof idade}`)
console.log(`A altura é do tipo: ${typeof altura}`)
console.log(`Estuda é do tipo: ${typeof estuda}`)