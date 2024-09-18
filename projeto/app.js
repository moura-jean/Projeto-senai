const express = require("express")
const app = express()
const port = 8080
const path = require('path')


app.get('/api-tester', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/', (req, res) => {
    res.send('Funcionou essa p****!')
})

app.listen(port,() =>{
    console.log('Running')
})

app.use(express.json()); // Para permitir o parsing de JSON no corpo das requisições


app.post('/rota', (req, res) => {
    const dados = req.body
    console.log(dados)
    // Processar os dados recebidos
    res.send(`Dados recebidos: ${JSON.stringify(dados)}`)
});
    