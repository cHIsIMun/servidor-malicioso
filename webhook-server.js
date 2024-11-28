const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Configurar o middleware CORS
app.use(cors({
    origin: 'http://localhost:3000', // Permitir apenas esta origem
    methods: ['POST'],               // Métodos permitidos
    allowedHeaders: ['Content-Type'] // Cabeçalhos permitidos
}));

// Middleware para parsear JSON
app.use(bodyParser.json());

// Rota para receber dados via webhook
app.post('/webhook', (req, res) => {
    console.log('📥 Dados Recebidos via Webhook:', req.body);
    res.status(200).send('Webhook recebido com sucesso!');
});

// Iniciar o servidor
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`🔗 Servidor de Webhook rodando em http://localhost:${PORT}`);
});