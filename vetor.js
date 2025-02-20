const read = require('readline-sync');

let idades =[];
let nomes =[];
nomes[0] = "jao";
nomes[1] = "Maria";
nomes[2] = "jose";

for (let j = 0; j < 3; j++){
    let idade = read.question("Sua idade: ");
 console.log (idade);
 idade = idades;
    console.log(idades[j]);
}

for (let i = 0; i < 3; i++){
    console.log(nomes[i]);
}