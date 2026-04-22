function criarArquivo(dados){
    const livrosJSON = JSON.stringify(dados)
    const fs = require('fs');
    fs.writeFileSync("livros2.json", livrosJSON);
}

//criarArquivo(livros)
let arquivo
function lerArquivo(){
    arquivo = require("./livros2.json")
}
lerArquivo()

function mostrarLivros(lista){
    console.log("##### ESTOQUE DE LIVROS #####")
    lista.forEach((livro) => {
        console.log(livro.titulo + " - " + 
                    livro.autor + " Ano:" + 
                    livro.ano + " Páginas:" +
                    livro.paginas + " Preço: R$ "+
                    livro.preco.toFixed(2).replaceAll(".",","))
    })
}
mostrarLivros(arquivo)

let livrosFiltrados = arquivo.filter((livro) => livro.preco > 100)
mostrarLivros(livrosFiltrados)

let livrosDesconto = arquivo.map((livro) => {
    return {...livro, preco: livro.preco * 0.9}
})
mostrarLivros(livrosDesconto)