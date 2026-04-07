const fs = require('fs')
const livros = [
{
    titulo: "Drácula",
    autor: "Bram Stoker",
    ano: 1897,
    paginas: 580,
    editora: "DarkSide Books",
    sinopse: "A obra atemporal de Bram Stoker narra, por meio de fragmentos de cartas, diários e notícias de jornal, a história de humanos lutando para sobreviver às investidas do vampiro Drácula. O grupo formado por Jonathan Harker, Mina Harker, dr. Van Helsing e dr. Seward tenta impedir que a vil criatura se alimente de sangue humano na Londres da época vitoriana, no final do século XIX.Um clássico absoluto do terror, Bram Stoker define em Drácula a forma como nós entendemos e pensamos os vampiros atualmente. Mais que isso, ele traz esse monstro para o centro do palco da cultura pop do nosso século e eterniza o vilão de modos refinados e comportamento sanguinário.",
    preco: 85.00
},

{
    titulo: "Carmilla, a vampira de Karnstein",
    autor: "Joseph Sheridan Le Fanu",
    ano: 1872,
    paginas: 193,
    editora: "DarkSide Books",
    sinopse: "E se aquela sombra no canto do quarto fosse mais que uma sombra? E se ela se afeiçoasse a você, passando a desejar não apenas o seu sangue, mas algo... além? Em um castelo isolado nas profundezas da Estíria, Laura leva uma vida solitária, tendo apenas seu pai doente como companhia. Até que, numa noite de luar, uma carruagem aparece carregando uma convidada inesperada – a bela Carmilla.Considerada um dos pontos altos da narrativa vampírica mundial, essa novela exerceu uma influência notável em obras posteriores, a ponto de sentirmos seus ecos tanto em outras obras-primas literárias, como Drácula , e recebeu uma abundante lista de adaptações audiovisuais e em quadrinhos.",
    preco: 60.90
},

{
    titulo: "O fantasma da Ópera",
    autor: "Gaston Leroux",
    ano: 1910,
    paginas: 304,
    editora: "Excelsior",
    sinopse: "Nas sombrias catacumbas da Ópera de Paris, um sinistro segredo aguarda sua descoberta. Quando o novo diretor do teatro se depara com eventos inexplicáveis, logo percebe que algo obscuro reside nos corredores do majestoso edifício: o enigmático Fantasma. A trama se desenrola quando Christine Daaé, uma talentosa soprano, é lançada no centro do palco e também do perigo. Escolhida pelo Fantasma como sua protegida, ela se vê envolvida em uma teia de amor, obsessão e vingança, enquanto luta para desvendar os segredos por trás do véu de mistério que envolve sua vida e a Ópera. Com reviravoltas emocionantes e uma atmosfera carregada de suspense, O Fantasma da Ópera é uma leitura que prende do início ao fim em uma história de amor proibido, obsessão ardente e uma redenção desafiadora. Explore o fascinante universo de mistério e paixão deste romance que tem cativado leitores por mais de um século!",
    preco: 68.00
},

{
    titulo: "Frankenstein",
    autor: "Mary Shelley",
    ano: 1818,
    paginas: 416,
    editora: "HarperKids",
    sinopse: "Frankenstein; ou, o Prometeu moderno tem aterrorizado e encantado os leitores desde sua primeira publicação em 1818. A criatura de Victor Frankenstein ― costurada a partir de restos humanos retirados da “sala de dissecação e do matadouro” ― é uma figura grotesca, rejeitada por seu criador e sedenta por companhia humana, que embarca em uma jornada de vingança. Na mais célebre história gótica de terror, Mary Shelley desafia os limites da ciência, da natureza da crueldade humana e da soberba e ambição.",
    preco: 119.00
},

{
    titulo: "O Retrato de Dorian Gray",
    autor: "Oscar Wilde",
    ano: 1890,
    paginas: 320,
    editora: "DarkSide Books",
    sinopse: "Londres, 1890. Entre médicos e monstros, assassinatos e mistérios, uma história sobre imortalidade, beleza e criminalidade é criada por uma das mentes mais indomáveis da história da literatura. O Retrato de Dorian Gray, a história da pintura maldita que se degrada com a passagem das décadas, deixando o seu modelo intocado pelo tempo, finalmente adentra a galeria da DarkSide® Books em uma edição feita para agraciar admiradores e arrebatar novos leitores.",
    preco: 63.00
},

{
    titulo: "O Médico e o Monstro e Outros Experimentos",
    autor: "Robert Louis Stevenson",
    ano: 1886,
    paginas: 352,
    editora: "DarkSide Books",
    sinopse: "Todos temos um lado pouco conhecido, secreto, por vezes maligno e até monstruoso. Raros, porém, são aqueles que dão vazão a esta faceta. O escocês Robert Louis Stevenson soube retratar, como poucos, este aspecto das personalidades múltiplas em sua novela gótica, O Médico e o Monstro, publicada originalmente em 1886, em Londres. Considerado um dos três maiores clássicos do gênero de horror, ao lado de Frankenstein e Drácula, O Médico e o Monstro inspirou incontáveis traduções, adaptações, interpretações e homenagens ao longo das décadas. ",
    preco: 75.80
},

{
    titulo: "Noites Brancas",
    autor: "Fiódor Dostoiévski",
    ano: 1848,
    paginas: 96,
    editora: "Garnier",
    sinopse: "Em Noites Brancas, Fiódor Dostoiévski mergulha no coração da alma humana, criando uma narrativa sensível e introspectiva.A história acompanha um homem solitário que, durante as noites brancas de São Petersburgo, encontra uma jovem mulher que o faz revisitar seus próprios sentimentos de amor e perda.Em uma obra carregada de emoções e reflexões, o autor nos convida a refletir sobre a natureza da solidão, do destino e da busca por conexão.Este livro, em sua edição de capa dura almofadada, oferece uma experiência de leitura ainda mais imersiva.O acabamento em hot-stamping, as laterais douradas e o marcador de páginas em fitilho tornam esta obra não apenas uma leitura, mas também uma peça de colecionador, perfeita para quem aprecia a literatura clássica em sua forma mais refinada.",
    preco: 29.90
},

{
    titulo: "Sherlock Holmes, um estudo em vermelho",
    autor: "Árthur Conan Doyle",
    ano: 1887,
    paginas: 176,
    editora: "Principis",
    sinopse: "O detetive mais famoso do mundo usa suas célebres habilidades de dedução neste livro, em que o Dr. John Watson é apresentado. Recentemente dispensado do serviço militar, Watson ocupa um quarto com um jovem incrível: o arrogante especialista em investigação criminal, Sherlock Holmes. E o acontecimento de um crime bizarro prova ser um começo promissor de uma das mais ilustres parcerias de todos os tempos.",
    preco: 42.00
},

{
    titulo: "Ponto de Impacto",
    autor: "Dan Brown",
    ano: 2001,
    paginas: 448,
    editora: "Arqueiro", 
    sinopse: "Às vésperas da eleição presidencial norte-americana, uma incrível descoberta da NASA pode mudar todo o cenário político. A agência espacial encontra um enorme meteorito enterrado na geleira Milne, no alto Ártico, contendo fósseis – uma prova irrefutável da existência de vida extraterrestre.A extraordinária revelação é feita exatamente quando a NASA se torna uma questão central na disputa pela presidência. O candidato à reeleição, o presidente Zachary Herney, vem perdendo pontos com os ataques de seu oponente, o senador Sedgewick Sexton, à ineficiência e aos gastos excessivos da agência espacial.Para evitar especulações sobre a autenticidade do meteorito, a Casa Branca convoca Rachel Sexton, analista do NRO – o Escritório Nacional de Reconhecimento, importante organização da comunidade de inteligência americana – e filha do adversário do presidente, para verificar os dados levantados pela NASA. Além dela, quatro renomados cientistas são enviados para o Ártico, entre eles o oceanógrafo e apresentador de TV Michael Tolland.Quando começam a levantar suspeitas de fraude, os cientistas passam a ser caçados por uma equipe de assassinos profissionais, controlada à distância por um inimigo poderoso que precisa eliminá-los um a um para resguardar seu segredo. Tentando escapar da morte certa, Rachel e Michael enfrentam os perigos da gelada paisagem do Ártico e inúmeras outras ameaças enquanto tentam descobrir quem se esconde por trás dessa genial armação.",
    preco: 39.90
},

 {
    titulo: "Memórias Póstumas de Brás Cubas",
    autor: "Machado de Assis",
    ano: 1881,
    paginas: 320,
    editora: "DarkSide Books",
    sinopse: "Em Memórias Póstumas , narrada pelo defunto-autor, conhecemos a vida do indolente Brás Cubas, cujo grande e inconcluso projeto era a criação de um medicamento “destinado a aliviar a nossa melancólica humanidade”, o Emplasto Brás Cubas . A real motivação, oculta sob o disfarce da filantropia, segundo suas próprias palavras, era o desejo de se tornar conhecido por todos. O personagem levou uma vida desregrada. Bacharelou-se em direito em Coimbra, Portugal ― como faziam os membros da elite brasileira da época ― sem jamais exercer a profissão. Não trabalhava e entrou para a política em busca das benesses que ela proporciona",
    preco: 59.00
}
]

function criarArquivo(dados){
    const livrosJSON = JSON.stringify(dados, null, 2)
    fs.writeFileSync("livros.json", livrosJSON)
}

function lerArquivo(){
    const dados = fs.readFileSync("livros.json", "utf-8")
    return JSON.parse(dados)
}

function mostrarLivros(lista){
    console.log("##### ESTOQUE DE LIVROS #####")
    lista.forEach((livro) => {
        console.log(
            livro.titulo + " - " +
            livro.autor + " Ano:" +
            livro.ano + " Páginas:" +
            livro.paginas + " Preço: R$ " +
            livro.preco.toFixed(2).replace(".", ",")
        )
    })
}

function adicionarLivro(lista, novoLivro){
    lista.push(novoLivro)
    return lista
}

function filtrarPorPreco(lista, valor){
    return lista.filter((livro) => livro.preco < valor)
}

function aplicarDesconto(lista, porcentagem){
    return lista.map((livro) => {
        return {
            ...livro,
            preco: livro.preco * (1 - porcentagem)
        }
    })
}