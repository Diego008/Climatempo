const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000
const routes = require('./routes.js');

app.use(express.json()) //Passando para aplicação que irá utilizar o JSON
app.set('view engine', 'ejs') //Setamos que nossa engine será o ejs;
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended: true })) //parsear o corpo das requisições pelo req.body

app.use(express.static(__dirname + '/public'))//Para poder acessar CSSs e JSs corretamente no HTML das páginas, disponibilizando eles de forma estática.

app.listen(port, () => {
    console.log(`Executar projeto em: http://localhost:${port}`)
})

//middleware para verificar se a requisição é o favicon.ico, se true, retorna vazio invés do retorno 404

app.use((req, res, next) => {
    if(req.url === '/favicon.ico'){
        res.writeHead(200, {'Content-Type': 'image/x-icon'});
        res.end('');
    }else{
        next();
    }
});

app.use(routes);