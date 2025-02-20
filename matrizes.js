const read = require('readline-sync');

letnomes = [[]];

for(let i = 0;i < 3; i++){
    for(let j = 0; j < 2; j++){
        nomes = read.question("linha " + i + " coluna " + j + ": ");
    }
}