// Importar o framework Express
const express = require('express');

// Criar a instância da aplicação
const app = express();

// MIDDLEWARE: permite ler JSON no body das requisições
// Sem isso, req.body sempre será undefined no POST/PUT
app.use(express.json());

// Cria uma Array de objetos (simulando um banco de dados) com ID
let musicas = [
    { id: 1, nome: 'Yellowstone Theme', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=YzX1jPQNbYQ&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=1' },
    { id: 2, nome: 'Valley of the Soul', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=EATvpGpLa_8&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=17' },
    { id: 3, nome: 'Unimagined', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=QbMN-rFqdeQ&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=19' },
    { id: 4, nome: 'Buryinf Secrets', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=CaSXKX9GiPc&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=16' }
];

// GET /produtos — Retorna TODOS os produtos
app.get('/musicas', (req, res) => {
// Status 200 = OK (sucesso)
res.status(200).json(musicas);
});



// Servidor
app.listen(3000, () => {
    console.log(`🚀 Servidor rodando em http://localhost:3000`);
    console.log(`📋 Acesse http://localhost:3000/musicas`);
});