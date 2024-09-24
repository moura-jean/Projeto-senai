var sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database("db.sqlite",  () => {
	console.log('Banco de dados conectado')
	db.run(`CREATE TABLE user (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name VARCHAR (50),
		email VARCHAR (50),	
		password VARCHAR (50)
	)`, (error) => {
		if(error) {
			console.error('Deu ruim, né', error)
			return;
		}
		var insertQuery = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)"
		db.run(insertQuery, ["usuario1", "usuario1@email.com", "123456"])
		db.run(insertQuery, ["admin", "adim@email.com", "123456"])
	}
)
	console.log('Rodou os SQLs')	
})

module.exports = db