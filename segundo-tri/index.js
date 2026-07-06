const express =  require("express")
const app = express()
const port = 3000
app.use(express.json())
const fs = require("fs")

app.get("/times", (req, res) => {
    try {
        const times = JSON.parse(fs.readFileSync("times.json", "utf8"))
        res.status(200).json(bd)
    } catch (error) {
        res.status(500).json({erro: error.message})
    }
})

app.get("/times/:nome", (req , res)=>{
    const nome = req.params.nome
    try{
        const times = JSON.parse(fs.readFileSync("times.json", "utf8"))
        const times_encontrado = times.filter((times) => times.nome == nome)
        if(times_encontrado.length == 0){
            return res.status(404).json({erro: "Time não encontrado"})
        }
        res.status(200).json(times_encontrado)
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})

app.post("/times", (req, res) => {
    const time = req.body

    try {
        const times = JSON.parse(fs.readFileSync("times.json", "utf8"))

        times.push(time)

        fs.writeFileSync("times.json", JSON.stringify(times), "utf8")

        res.status(201).json({
            resposta: "Time cadastrado com sucesso!",
            time
        })
    } catch (error) {
        res.status(500).json({ erro: error.message })
    }
})

app.delete("/times/:id", (req , res)=>{
    const id = req.params.id
    try{
        const times = JSON.parse(fs.readFileSync("times.json", "utf8"))
        const indice_time = times.findIndex((time) => time.id == id)
        if (indice_time == -1) {
            return res.status(404).json({resposta: "Time não encontrado"})
        }
        times.splice(indice_time, 1)
        fs.writeFileSync("times.json", JSON.stringify(times), "utf8")
        res.status(200).json({resposta: "Time removido com sucesso!"})
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})

app.get("/times/regiao/:regiao", (req , res)=>{
    const regiao = req.params.regiao
    try{
        const times = JSON.parse(fs.readFileSync("times.json", "utf8"))
        const times_encontrados = times.filter((times) => times.regiao == regiao)
        if(times_encontrados.length == 0){
            return res.status(404).json({erro: "Não existem times dessa região."})
        }
        res.status(200).json(times_encontrados)
    } catch(error){
        res.status(500).json({resposta: error.message})
    }  
})



app.listen(port, ()=>{
    console.log("API rodando na porta " + port)
})