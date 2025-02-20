const read = require('readline-sync');
let parar = "n";
do{
    console.log("Repitiu");
    parar = read.question("parar de repetir? S/n");
    console.log(parar);
} while(parar !== "S" && parar !== "s");