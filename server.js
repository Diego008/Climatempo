const express = require('express')
const bodyParser = require('body-parser')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000

//app.use(express.json()) //Passando para aplicação que irá utilizar o JSON
app.set('view engine', 'ejs') //Setamos que nossa engine será o ejs;
app.use(expressLayouts)
app.use(bodyParser.urlencoded({ extended: true })) //parsear o corpo das requisições pelo req.body

app.use(express.static(__dirname + '/public'))//Para poder acessar CSSs e JSs corretamente no HTML das páginas, disponibilizando eles de forma estática.

app.listen(port, () => {
    console.log(`Executar projeto em: http://localhost:${port}`)
})

app.get('/', (req, res) => {
    res.render('pages/home')
})