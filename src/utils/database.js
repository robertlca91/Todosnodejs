const { Sequelize } = require('sequelize')

// crear una instancia con parametro
// un bejto de configuracion que no es mas que las credenciales de mi base de datos
const db = new Sequelize({
  database: 'todoapp2',
  username: 'robert', // el que tiene usuario pone su usuario
  host: 'localhost', //127.0.0.1
  port: '5432', // este no se de dondes sale
  password: 'viole147', // pones tu contraseña
  dialect: 'postgres', // la base de datos que estamos usando
})

module.exports = db
