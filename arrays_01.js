const read = require('readline-sync');
class meuarray{

constructor()
{
    this.items = []; //usamos um item para armazenar os items do array
    this.tamanho = 0; //mantemos o controle do tamanho do array
}

//adiciona um lemento ao final do array
adicionar(elemento)
{
    this.items[this.tamanho] = elemento; // insere o elemento na posição atual do tamanho
    this.tamanho++; // incrementa o tamanho
}

//remove o ultimo elemento do array
remover()
{
    if (this.tamanho === 0){
        return undefined; //se o array estiver vazio, nao há oque remover
    }

    const ultimoItem = this.items[this.tamanho - 1]; // Armazena o ultimo item
    delete this.items[this.tamanho - 1]; // Remove o ultimo item do array
    this.tamanho--; // Decremento o tamanho
    
    return ultimoItem; // Retorna o item removido
}

//acessa o elemento em um indice especifico
obterElemento(indice)
{
    if (indice < 0 || indice >= this.tmanho){
        return underfined; // se o indice estiver fora do alcance retorna undefined       
    }
    return this.items[indice]; // Retorna o item no indice solicitado 
}

//retorna o tamanho do array
tamanhoArray()
{
    return this.tamanho; // retorna o valor do tamanho atual do array
}

//remove todos os elementos do array
limpar()
{
    this.items = [];
    this.tamanho = 0;
}

}

// exemplo de uso
const tarefas = new meuarray();

let tarefa = read.question("qual a tarefa");

for(let op = ){

}


tarefas.adicionar(1);
tarefas.adicionar(2);
tarefas.adicionar(3);
tarefas.adicionar(4);
tarefas.adicionar(5);

console.log("tarefa removida", tarefas.remover());

console.log("lista de tarefa");
for(let i = 0; i < tarefas.tamanhoArray(); i++){
    console.log(tarefas.obterElemento(i));
}

/*minha_variavel.adicionar(10);
minha_variavel.adicionar(20);
minha_variavel.adicionar(30);

//demonstração em tabela
console.table(minha_variavel.items);

console.log(minha_variavel.obterElemento(1)); //saida: 20
console.log(minha_variavel.tamanhoArray()); //saida: 3

console.log(minha_variavel.remover()); //saida: 30 (remove oultimo elemento)
console.log(minha_variavel.tamanhoArray()); // saida: 2*/


