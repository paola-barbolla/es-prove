
const express = require("express");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = new express();
app.use(bodyParser.json());

fetch("http://192.168.1.231:8080/accreditamento", {
    method: "post",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({nome: "Paola Barbolla"})
})

fetch("http://192.168.1.231:8080/esercizi/1", {
    method: "get",
    headers: {"x-data": "true"}
})
.then(res => res.json())
.then(resBody => {
    const reqData = resBody.data
    console.log(reqData)
    let risultato = []
    reqData.forEach(e => {
        if (e % 3 === 0){
            risultato.push(e)
        }
    });
    console.log(risultato)
    fetch("http://192.168.1.231:8080/esercizi/1", {
        method: "post",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({data: risultato})
    })
})

/* ES 2 */
const parole = ["CASA", "ALBERO", "CANE", "LOCALE", "SALE", "PEPE", "ZUCCHERO", "MELE", "BANANE", "UVA"]
let lista = []
parole.forEach(e => {
    if (e[e.length-1] === "E") {
        lista.push(e.toLowerCase())
    } 
})
console.log(lista)

/* ES 3 */
const parole2 = ["casa", "albero", "cane", "locale", "sale", "pepe", "zucchero", "mele", "banana", "uva"]
let c = 0
parole2.forEach(e => {
    if (e.length < 5){
        c += e.length
    }
})
console.log(c)

app.listen(8080, () => console.log("server listening on port 8080"))