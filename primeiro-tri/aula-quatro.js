// Condições
// if ... else


const idade = 20
if (idade < 18) {
    console.log("Você não pode tirar a CNH")
} else {
    console.log("Você pode tirar CNH, pague a taxa!")
}

const possuiCNH = false
if (idade >= 18 && possuiCNH == true){
    console.log("Tudo certo, você pode dirigir!")
}


// Operadores lógicos:
// && -> E
// || -> OU
/* TABELA VERDADE:
Para operador E:    |    operador OU:
V V = V             |   V V = V
V F = F             |   V F = V
F V = F             |   F V = V
F F = F             |   F F = F
*/



/* A escola adota uma recuperação para cada avaliação, 
que substitui a nota do aluno caso seja maior que 
sua nota anterior.
Dada as seguintes notas, calcule a média simples 
do aluno e diga se ele está aprovado ou reprovado, 
levando em consideração a substituição de notas. */

const av1 = 7.0;
const av2 = 5.0;
const recup1 = 4.0;
const recup2 = 10.0;
let nota1;
let nota2;
let media;

if (recup1 > av1) {
    nota1 = recup1;
} else {
    nota1 = av1;
}


if (recup2 > av2) {
    nota2 = recup2;
} else {
    nota2 = av2;
}

// Calcula a média
media = (nota1 + nota2) / 2;

// Mostra a média
console.log("Média:", media);

if (media >= 6) {
    console.log("Aluno aprovado!");
} else {
    console.log("Aluno reprovado!");
}