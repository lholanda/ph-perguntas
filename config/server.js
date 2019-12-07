/*!-----------!
/ !  REQUIRE  !
/ !-----------!*/
/* importar o modulo do express */
const express = require( 'express' );

/* Iniciar o objeto app - variavel principal do aplicativo (app) */
const ejs     = require( 'ejs' );

/* importar o modulo do body-parser */
const bodyParser = require( 'body-parser' );

/* Conectar ao banco de dados db_guiaperguntas */
const CONNECTION = require("../database/conexaoBD");

// Cria a tabela tb_perguntas atraves do Model Perguntas.js
const PERGUNTA = require("../database/perguntasModel")

// Conecta o Banco de Dados db_guiaperguntas
CONNECTION
  .authenticate()
  .then(()=>{
    console.log("Conexao Ok")
  })
  .catch((msgErro)=>{
    console.log(msgErro)
  })
  
/*!-------!
/ !  APP  !
/ !-------!*/
/* Iniciar o objeto app - variavel principal do aplicativo (app) */
const app     = express();

/* Setar as variaveis 'views engine' e 'views' do express */
// vou utilizar o éjs´para renderizar os html 
app.set('view engine','ejs');
// define a partir de onde as views estarão
app.set( 'views', './app/views' );

// guarda a constante PERGUNTA dentro de app , deve buscar com "app.settings.pergunta"
app.set( "pergunta", PERGUNTA);

/*!---------------!
/ !  MIDDLEWARES  !
/ !---------------!*/ 
//habilitar o express para usar arquivos estaticos - middleware
app.use(express.static('public'));

/* Configurar o middleware body-parser */
app.use( bodyParser.urlencoded( { extended: false } ));  // json de um form
app.use( bodyParser.json()); // mais utilizado qdo trabalhar com API

// exporta a constante app, que guarda todo o framework express();
module.exports = app;
