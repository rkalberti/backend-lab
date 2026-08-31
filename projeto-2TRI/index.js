// npm init ---- npm i express mysql2
// instalar extensão RapidAPI Client ----  http://localhost:3000/clientes

const express = require("express")
const mysql = require("mysql2") // Driver para conectar com o banco da extensão
const app = express()
const port = 3001

app.use(express.json())

// CONFIGURAÇÃO DO SEU BANCO DE DADOS
const db = mysql.createConnection({
    host: "127.0.0.1",         
    user: "root",              
    password: "escola",              
    database: "3DSBK"        
})


db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar no banco da extensão: " + err.message)
    } else {
        console.log("Conectado com sucesso ao banco de dados da extensão!")
    }
})

// CADASTRO DE CLIENTE
app.post("/clientes", (req, res) => {
    const { nome, cpf, email, celular, senha } = req.body

    if (!nome || !cpf || !email || !celular || !senha) {
        return res.status(400).json({ resposta: "Body não foi preenchido com os dados do cliente!" })
    }

    const query = "INSERT INTO cliente (nome, cpf, email, celular, senha) VALUES (?, ?, ?, ?, ?)"
    
    db.query(query, [nome, cpf, email, celular, senha], (error, results) => {
        if (error) {
            return res.status(500).json({ resposta: error.message })
        }
        res.status(201).json({ resposta: "Cliente cadastrado com sucesso!", id: results.insertId })
    })
})

// CONSULTA DOS CLIENTES
app.get("/clientes", (req, res) => {
    const query = "SELECT * FROM cliente"

    db.query(query, (error, results) => {
        if (error) {
            return res.status(500).json({ resposta: error.message })
        }
        res.status(200).json(results)
    })
})

// CONSULTA DE CLIENTE
app.get("/clientes/:cpf", (req, res) => {
    const cpfParam = req.params.cpf
    const cpfLimpo = cpfParam.replace(/[^\d]/g, '') 

    
    const query = "SELECT * FROM cliente WHERE REPLACE(REPLACE(cpf, '.', ''), '-', '') = ?"

    db.query(query, [cpfLimpo], (error, results) => {
        if (error) {
            return res.status(500).json({ resposta: error.message })
        }
        if (results.length === 0) {
            return res.status(404).json({ resposta: "Cliente não existe no banco de dados!" })
        }
        res.status(200).json(results[0]) 
    })
})

// ALTERAÇÃO DOS DADOS
app.put("/clientes/:id", (req, res) => {
    const id = req.params.id
    const { nome, email, celular, senha } = req.body

    if (!nome || !email || !celular || !senha) {
        return res.status(400).json({ resposta: "Campos obrigatórios não preenchidos para atualização!" })
    }

    const query = "UPDATE cliente SET nome = ?, email = ?, celular = ?, senha = ? WHERE id = ?"

    db.query(query, [nome, email, celular, senha, id], (error, results) => {
        if (error) {
            return res.status(500).json({ resposta: error.message })
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ resposta: "Cliente não encontrado para alteração!" })
        }
        res.status(200).json({ resposta: "Dados do cliente alterados com sucesso!" })
    })
})

// EXCLUSÃO DE UM CLIENTES 
app.delete("/clientes/:cpf", (req, res) => {
    const cpfParam = req.params.cpf
    const cpfLimpo = cpfParam.replace(/[^\d]/g, '')

    const query = "DELETE FROM cliente WHERE REPLACE(REPLACE(cpf, '.', ''), '-', '') = ?"

    db.query(query, [cpfLimpo], (error, results) => {
        if (error) {
            return res.status(500).json({ resposta: error.message })
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ resposta: "Cliente não existe no banco de dados!" })
        }
        res.status(200).json({ resposta: "Cliente deletado do banco de dados!" })
    })
})

app.listen(port, () => {
    console.log("Api executando na porta " + port)
})
