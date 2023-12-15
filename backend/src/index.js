
const express = require('express');

const app = express();

app.listen(3333, () => console.log('Server Rodando na porta 3333'));

// Testando o servidor

app.get('/', (req, res) => res.status(200).send('Olá mundo'));