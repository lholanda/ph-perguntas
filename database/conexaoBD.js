const SEQUELIZE = require('sequelize');

// Cria a conexao com o banco db_guiaPerguntas
const CONNECTION = new
SEQUELIZE('db_guiaperguntas', 'root', '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = CONNECTION;