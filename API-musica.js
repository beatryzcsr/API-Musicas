const express = require('express');

const app = express();


app.use(express.json());


let musicas = [
    { id: 1, nome: 'Yellowstone Theme', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=YzX1jPQNbYQ&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=1' },
    { id: 2, nome: 'Valley of the Soul', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=EATvpGpLa_8&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=17' },
    { id: 3, nome: 'Unimagined', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=QbMN-rFqdeQ&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=19' },
    { id: 4, nome: 'Buryinf Secrets', autor: 'Yellowstone (Original Television Series Soundtrack)', link: 'https://www.youtube.com/watch?v=CaSXKX9GiPc&list=PLRW80bBvVD3U1tL2L7LiXPabRcZCYkzxM&index=16' }
];


app.get('/musicas', (req, res) => {
res.status(200).json(musicas);
});

app.get('/musicas/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const musica = musicas.find(p => p.id === id);

    if (musica) {
    res.status(200).json(musica);
    } else {
    res.status(404).json({mensagem: "Produto não encontrado"});
    }
});


app.listen(3000, () => {
    console.log(`🚀 Servidor rodando em http://localhost:3000`);
    console.log(`📋 Acesse http://localhost:3000/musicas`);
});