const express = require('express');
const app = express();

app.use(express.json());

const paes = [
    {
        id : 1,
        nome : 'Pão Italiano',
        preco : 10
    }
];

app.get('/paes',function(req,res){
    res.json(paes);
})

app.post('/paes', function(req,res) {
    const {nome,preco} = req.body;
    const novoPao = {id: paes[paes.length -1].id+1,nome,preco};

    paes.push(novoPao);

    res.json(novoPao);
});

app.put('/paes/:id', function(req,res){
    const {id} = req.params;
    const {nome,preco} = req.body;

    const pao = paes.find(pao => pao.id === Number(id));

    pao.nome=nome;
    pao.preco=preco;

    res.json(pao);
});


app.listen(3030, ()=> console.log('O servidor está ON'));