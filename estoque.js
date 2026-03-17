/*
===============ATIVIDADE===============
1) Crie o nome de 8 produtos e armazene em uma lista;
2) Crie outra lista para armazenar o preço de cada produto.
3) Crie uma função para mostrar o estoque, mostrando o nome da cada produto e o seu preço.
4) Crie uma função que adiciona um novo produto (e consequentemente um novo preço)
5) Crie uma função que remove um produto da lista recebendo seu índice.
6) EXECUTE AS FUNÇÕES CRIADAS NA SEGUINTE ORDEM:
    - mostra estoque
    - adiciona produto
    - mostra estoque
    - remove um elemento pelo índice
    - mostra estoque
*/
const produtos = [
    "Memória RAM DDR4 8GB",  "Memória RAM DDR5 16GB",  "SSD Kingston",  "Ryzen 7 7700",   "Intel i5-12400F",   "Ryzen 5 5500",  "RTX 4090", "RX6600"
];

const valores = [
    150,  200,  190,  1800,  620,  480,   999,  980
];

function mostrarEstoque() {
    console.log("⊹₊˚‧︵୨ESTOQUE୧︵‧˚₊⊹");
    for (let i = 0; i < produtos.length; i++) {
        console.log(produtos[i] + " - R$ " + valores[i]);
    }
}

function adicionarProduto(nome, preco) {
    produtos.push(nome);
    valores.push(preco);
    console.log("Produto Adicionado!");
}

function removerProduto(indice) {
    produtos.splice(indice, 1);
    valores.splice(indice, 1);
    console.log("Produto Removido!");
}

mostrarEstoque();

adicionarProduto("HD 1TB", 350);

mostrarEstoque();

removerProduto(2);

mostrarEstoque();
