const config = require('./config/config');
const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

require('./config/routers')(app);

app.listen(config.port, function(){
    console.log('Aplicação rodando na porta 8080');
})