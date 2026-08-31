# 🚀 API de Cadastro de Clientes (AV3 - Projeto Final 2º TRI)

Uma API REST desenvolvida em **Node.js** e **Express** para gerenciamento e cadastro de clientes, integrada a um banco de dados **MySQL**. Projeto desenvolvido como avaliação final para a disciplina de Desenvolvimento de Sistemas.

---

## 🛠️ Tecnologias Utilizadas

*   **Node.js** (Ambiente de execução)
*   **Express** (Framework web para criação de rotas e API)
*   **MySQL** (Banco de dados relacional)
*   **Database Client** (Extensão do VS Code para gerenciamento do BD)

---

## 📁 Estrutura do Projeto

```text
├── clientes.sql   # Script de criação e população do banco de dados
└── index.js       # Arquivo principal da API (Configurações, conexão e rotas)
```

---

## 💾 Banco de Dados (`clientes.sql`)

O banco de dados armazena informações básicas dos clientes. 

---

## 🏁 Rotas da API (`index.js`)

A API mapeia todas as operações de CRUD solicitadas na avaliação:

| Método | Endpoint | Descrição |
| :--- | :--- | :--- |
| **POST** | `/clientes` | Cadastra um novo cliente |
| **GET** | `/clientes` | Consulta todos os clientes cadastrados |
| **GET** | `/clientes/:cpf` | Consulta os dados de um cliente específico |
| **PUT** | `/clientes/:id` | Altera os dados de um cliente existente |
| **DELETE** | `/clientes/:cpf` | Exclui um cliente do sistema |

---

## 🚀 Como Executar o Projeto

### 1. Pré-requisitos
Certifique-se de ter instalado em sua máquina:
*   [Node.js]
*   Servidor MySQL ativo (XAMPP, Docker ou instalação nativa)

### 2. Configuração do Banco de Dados
1. Abra o arquivo `clientes.sql` no VS Code.
2. Utilize a extensão **Database Client** para conectar ao seu servidor MySQL local.
3. Execute o script completo para criar o banco de dados e a tabela.

### 3. Instalação e Execução da API
No terminal do VS Code, inicialize o projeto e instale as dependências:

```bash
# Inicializar o projeto node (caso ainda não tenha feito)
npm init -y

# Instalar o Express e o driver do MySQL
npm install express mysql2

# Executar a API
node index.js
```

A API iniciará por padrão na porta `3001` (http://localhost:3001).

---

## 📝 Desenvolvedor
*   **Ketlyn Alberti*
*   Período: 2º Trimestre
