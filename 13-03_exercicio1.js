class fila{
    constructor(){
        this.items = {}; // usamos um objeto para armazanar os itens
        this.inicio = 0; // representa o inidice do inicio da fila
        this.fim = 0;    // representa o inidice do fim da fila
    }

    // adiciona um elemento ao final da fila (enqueue)
    enqueue(elemento){
        this.items[this.fim] = elemento; // coloca o elemento no fim da fila
        this.fim++; // incremento o indice do fim da fila 
    }

    // remove e retorna o primeiro elemento da fila (dequeue)
    dequeue(){
        if(this.isEmpty()){
            return undefined; // se a fila estiver vazia, retorna umdefind
        }

        const item = this.items[this.inicio]; // obtem o primeiro elemento
        delete this.items[this.inicio]; //remove o item do inicio da fila
        this.inicio++; // move o indice do inicio para o proximo item

        // quando o inicio e o fim estivem alinhados, redefine a fila
        if(this.inicio === this.fim){
            this.inicio = 0;
            this.fim = 0;
        }
        return item; // retorna o item removido
    }

    // retorna o primeiro elemento da fila sem remove-lo (peek)
    front(){
        if(this.isEmpty()){
            return undefined; // se a fila estiver vazia, retorna undefined
        }
        return this.items[this.inicio]; // retorna o primeiro elemento
    }

    // verifica se a fila esta vazia
    isEmpty(){
        return this.fim === this.inicio; //
    }

    // retorna o tamanho da fila
    size(){
        return this.fim - this.inicio; //
    }

    // limapa a fila
    clear(){
        this.itms = {};
        this.inicio = 0;
        this.fim = 0;
    }

}

let paciente = new fila()

paciente.enqueue("joão");
paciente.enqueue("marta");
paciente.enqueue("febricio");
paciente.enqueue("lucas");

console.log(""+paciente.dequeue())


// console.log(paciente.size());

// setTimeout(function(){
//     console.log("paciente 1");
// }, 1000);

// paciente.enqueue();

// setTimeout(function(){
//     console.log("paciente 2");
// }, 3000);

// paciente.enqueue();

// setTimeout(function(){
//     console.log("paciente 3");
// }, 2000);

// paciente.enqueue();

// setTimeout(function(){
//     console.log("paciente 4");
// }, 5000);

// paciente.enqueue();




