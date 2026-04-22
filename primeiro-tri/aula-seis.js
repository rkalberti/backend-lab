// Funções
function calcularMedia(nota1, nota2){
    let soma = nota1 + nota2
    return "A média é " + soma/2
}
console.log(calcularMedia(10,6))

const carros = ["Uno", "DS3", "Gol"]
function mostrarCarros(){
    contador = 0
    while(contador < carros.length){
        console.log(carros[contador])
        contador++
    }
}
mostrarCarros()