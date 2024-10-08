const mysql = require('mysql2')
console.log(process.env.DBHOST)

const pool = mysql.createPool({
  host: process.env.DBHOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  waitForConnections: true,   // Espera por conexões disponíveis
  connectionLimit: 10,        // Limite máximo de conexões no pool
  queueLimit: 0               // Número máximo de conexões em espera (0 = ilimitado)
})

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting: ' + err.stack)
    return
  }
  console.log('Connected as id ' + connection.threadId)

  // Libera a conexão de volta para o pool após o uso
  connection.release()
})

module.exports = pool