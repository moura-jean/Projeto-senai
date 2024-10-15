const express = require("express")
const app = express()
const port = 8080
const path = require('path')
require("dotenv").config()
const db = require('../database')


app.get('/api-tester', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/index.html'))
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
    
// app.get('/usuario/:id', (req, res, next) => {
//     res.send(req.params.id)
//     db.all()
// })

app.get('/usuario/:id', (req, res) => {
    parametro = req.params.id
    db.get("SELECT * FROM user WHERE id = ?", parametro, (error, row) => {
        if(error) {
            res.json(error)
            return
        }
        res.send(row)
    })
})

app.get('/tasks/:id', (req, res) => {
	parametro1 = req.params.id
  db.query("SELECT * FROM tasks WHERE id = ?", parametro1, (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
})
app.get('/tasks', (req, res) => {
  db.query("SELECT * FROM tasks ORDER BY id ASC", (error, rows) => {
  	if(error) {
    	console.log(error)
      return
    }
    res.send(rows)
  })
})

/////1/10
app.post('/tasks', (req, res) => {
  const parametros = req.body
  console.log(parametros)
  db.query(`INSERT INTO tasks (titulo, descricao, status) VALUES ('${parametros.titulo}', '${parametros.descricao}', '${parametros.status}')`, (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
});

app.put('/tasks/:id', (req, res) => {
  const parametro1 = req.body
  console.log(parametro1)
  db.query(`UPDATE tasks SET titulo = '${parametro1.titulo}', descricao = '${parametro1.descricao}', status = '${parametro1.status}' WHERE id = ?`, req.params.id,  (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
});

app.delete('/tasks/:id', (req, res) =>{
  const parametro2 = req.body
  console.log(parametro2)
  db.query(`DELETE FROM tasks WHERE id = ?`, req.params.id,  (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
})

//07-10

app.get('/users', (req, res) => {
    db.query("SELECT * FROM users ORDER BY id ASC", (error, rows) => {
        if(error) {
          console.log(error)
        return
      }
      res.send(rows)
    })
})

app.post('/users', (req, res) => {
    const parametro1 = req.body
    console.log(parametro1)
    db.query(`INSERT INTO users (nome) VALUES ('${parametro1.titulo}')`, (error, row) => {
        if(error) {
          res.json(error)
        return
      }
      res.send(row)
    })
});

//14-10

app.put('/users/:id', (req, res) => {
  const parametro1 = req.body
  console.log(parametro1)
  db.query(`UPDATE users SET nome = '${parametro1.titulo} ' WHERE id = ?`, req.params.id,  (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
});

app.delete('/users/:id', (req, res) =>{
  const parametro1 = req.body
  console.log(parametro1)
  db.query(`DELETE FROM users WHERE id = ?`, req.params.id,  (error, row) => {
  	if(error) {
    	res.json(error)
      return
    }
    res.send(row)
  })
})
