/* 
Instale as bibliotecas e o cliente de API:
npm init
npm i express
Procure pela extensão RapidAPI Client no VSCode.
*/
// Para executar a API no terminal: node index.js
// Link para testar a API: http://localhost:3000/rota

const express =  require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require("fs")

app.get("/musicas", (req, res) => {
    try {
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        res.status(200).json(bd)
    } catch (error) {
        res.status(500).json({erro: error.message})
    }
})

app.get("/musicas/:id", (req, res) => {
    const id = req.params.id
    try {
        const musicas = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const musica_encontrada = musicas.find((musica) => musica.id == id)
        if(musica_encontrada) {
            res.status(200).json(musica_encontrada)
        } else{
            res.status(404).json({resposta: "Musica não exixte no banco de dados"})
        }
        res.status(200).json(bd)
    } catch (error) {
        res.status(500).json({resposta: error.message})
    }
})

app.post("/musicas", (req, res) => {
    const musica = req.body
    try {
        const bd = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        res.status(200).json(bd)
    } catch (error) {
        res.status(500).json({erro: error.message})
    }
})



app.delete("/musicas/:id", (req , res)=>{
    const id = req.params.id
    try{
        const musicas = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const indice_musica = musicas.findIndex((musica) => musica.id == id)
        if (indice_musica == -1) {
            return res.status(404).json({resposta: "Música não existe no banco de dados!"})
        }
        musicas.splice(indice_musica, 1)
        fs.writeFileSync("bd.json", JSON.stringify(musicas), "utf8")
        res.status(200).json({resposta: "Música deletada com sucesso!"})
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})

app.get("/musicas/estilo/:estilo", (req , res)=>{
    const estilo = req.params.estilo
    try{
        const musicas = JSON.parse(fs.readFileSync("bd.json", "utf8"))
        const musicas_encontradas = musicas.filter((musica) => musica.estilo == estilo)
        if(musicas_encontradas.length == 0){
            return res.status(404).json({erro: "Não existem músicas desse estilo!"})
        }
        res.status(200).json(musicas_encontradas)
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})



// Execução da API:
app.listen(port, ()=>{
    console.log("API rodando na porta " + port)
})