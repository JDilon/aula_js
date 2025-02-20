const read = require('readline-sync');
let nome = read.question("qual seu nome?");
console.log(nome);

let n1 = read.question("Digite um numero: ");
let n2 = read.question("Digite outro numero: ");
let resultado = parseInt(n1) + parseInt(n2);
console.log(nome + "o resultado deu: "+resultado);