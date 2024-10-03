//carregando modulos
const express = require("express");
const bodyParser = require ("body-parser");
// carregando o banco de dados
const connection = require("./database/database");

// importando categorias e artigos
const categoriesController = require("./categories/CategoriesController");
const articlesController = require("./articles/articlesController");

const Article = require("./articles/Articles");
const Category = require("./categories/Category");

// criar instancia express
const app = express();

// static
app.use(express.static('public'));

//view engine
app.set('view engine', 'ejs');

//bodyparser
app.use(bodyParser.urlencoded({extends: false}));
app.use(bodyParser.json());

// database
connection
    .authenticate()
    .then(() => { 
        console.log ("conexão criada com sucesso");
    }).catch((error) => {
        console.log(error);
    })
    

app.use("/", categoriesController);
app.use("/", articlesController);


//criando rotas principais
app.get("/", (req,res) => {res.render("index")});

//porta e funcao de callback
app.listen(1212, () => {console.log("SERVIDOR RODANDO!!!")})