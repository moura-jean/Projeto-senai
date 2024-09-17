const express = require("express")
const app = express()
const port = 8080


app.get('/sobre', (req, res) => {
    res.send('<h1>Aula 16/09 </h1>')
})

app.listen(port,() =>{
    console.log('Running')
})