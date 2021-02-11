const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = new express();
app.use(bodyParser.json());

app.post("/accreditamento", (req, res) => {
  res.json({nome: "Paola", cognome: "Barbolla"})
})

app.post("/somma-dispari", (req, res) => {
    const num = req.body.numbers;
    let s=0;
    num.forEach(e => {
        if(e % 2 ==1){
        s += e}
    })
    res.json({sum: s})
})

app.put("/lista-parole-b", (req, res)=>{
    const parole = req.body.words;
    let c = 0;
    let lista = [];
    parole.forEach(e => {
        if(e.length < 4){
        c += 1;
        lista.push(e);   
        }
    })
    res.json({count: c, words: lista.join(" ")})
})

app.post("/comments", (req, res) => {
    const id = req.body.id;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then(response => response.json())
        .then(data =>{
            res.json({count: data[0].body.split(" ").length})
        })
})

app.listen(8080, () => console.log("server listening on port 8080"))