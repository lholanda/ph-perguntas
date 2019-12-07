/*
    Aplicação : ph-perguntas
    Autor     : Luiz Roberto Holanda
    Data      : 25/11/2019
*/
// importar a configuração do servidor
var app = require('./config/server');

// cria uma constante a partir da variavel armazenada em app (a partir de server.js) 
const TB_PERGUNTAS = app.settings.pergunta;

// Trabalhar com a app express()
app
// Criar rotas
    .get('/', function( req,res ){
        // { raw: true } -> pega dados crus, ordernar por id;
        TB_PERGUNTAS.findAll({ 
              raw: true , 
              order: [[ 'id', 'DESC']]
            }).then((perguntas)=>{
              res.render('index', { 
                perguntas: perguntas 
              });
        });    
    })

    .get('/perguntar', function( req,res ){
        console.log('entrou em /perguntar')
        res.render('perguntar')
    })

    /* Rota para receber dados do formulario das perguntas '/perguntar' */
    .post('/salvarpergunta', function( req,res ){   
        TB_PERGUNTAS.create({
            titulo: req.body.titulo,
            descricao: req.body.descricao
        }).then(()=>{
            res.redirect('/');
        });
    })

    .get('/pergunta/:id', function( req,res ){
        var id = req.params.id;
        // { raw: true } -> pega dados crus, ordernar por id;
        TB_PERGUNTAS.findOne({
              where: { id: id }                   
            }).then((pergunta)=>{
                if (pergunta != undefined){
                    res.render('pergunta', {pergunta: pergunta})
                } else {
                    res.redirect('/'); 
                }      
            });
    })    
    
// parametrizar a porta de escuta do servidor
    .listen( 8000, function (){
        console.log('Servidor ON :::< Rodando na porta : 8000 >:::');
    });