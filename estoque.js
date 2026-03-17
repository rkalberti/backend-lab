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
