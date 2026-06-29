// npm init
// npm i express
// instalar extensão RapidAPI

const express = require("express")
const app = express()
const port = 3000

app.get("/ola", (req, res)=>{
    res.send("Olá mundo!")
})

app.get("/aluno", (req, res)=>{
    res.send({
        nome: "Dustin",
        turma: "3DSB"
    })
})

app.listen(port, ()=>{
    console.log("API executando na porta " + port)
})
