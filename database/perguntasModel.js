// Model para cria a tabela tb_perguntas no banco de dados
const SEQUELIZE = require('sequelize');
const CONNECTION= require('./conexaoBD');

const CRIATB_PERGUNTAS = CONNECTION.define('tb_perguntas',{
    titulo: {
        type: SEQUELIZE.STRING,
        allowNull: false
    } , 
    descricao: {
        type: SEQUELIZE.TEXT,
        allowNull: false
    }
});

// Cria a tabela se não existe, mas não força a criação se já existe
CRIATB_PERGUNTAS.sync({ force: false })
.then(()=>{
    //console.log("***** Tabela tb_perguntas foi criada no BD !!!")
});

module.exports = CRIATB_PERGUNTAS