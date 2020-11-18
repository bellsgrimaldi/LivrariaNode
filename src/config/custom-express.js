require('marko/node-require').install();
require('marko/express');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ //informa que está habilitado para receber objetos complexos em formato json
    extended: true
}));

const rotas = require('../app/rotas/rotas.js');

rotas(app);

module.exports = app; //dizendo pro node que o modulo vai exportar a constante app