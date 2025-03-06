// class minhapilha{

//     constructor(){
//         this.itens = {}; //usamos um objeto par armzenar os elementos da pilha
//         this.tamanho = 0; //mantemos o controle do tamanho da pilha
//     }

//     // adiciona um elemento ao topo da pilha
//     adicionar(elemento)
//     {
//         this.itens[this.tamanho] = elemento;
//         this.tamanho++;
//     }

//     remover()
//     {
//         if(this.tamanho === 0){
//             return undefined;
//         }

//         const ultimoitem = this.itens[this.tamanho -1];
//         delete this.itens[this.tamanho - 1];
//         this.tamanho--;

//         return ultimoitem;
//     }

//     topo()
//     {
//         if(this.tamanho === 0){
//             return undefined;
//         }

//         return this.itens[this.tamanho - 1];
//     }

//     estavazia()
//     {
//         return this.tamanho === 0;
//     }

//     tamanhopilha()
//     {
//         return this.tamanho;
//     }

//     limpar()
//     {
//         this.itens = {};
//         this.tamanho = 0;
//     }
// }

// //exemplo de uso pilha
// let minha_variavel = new minhapilha();
// minha_variavel.adicionar(10);
// minha_variavel.adicionar(20);
// minha_variavel.adicionar(30); 

// console.log(minha_variavel.topo());

// console.log(minha_variavel.remover());
// console.log(minha_variavel.topo());

// console.log(minha_variavel.tamanhopilha());




// let eldrin = new minhapilha();

// eldrin.adicionar("abracadabra");
// console.log(eldrin.topo());
// eldrin.adicionar("simsalabim");
// console.log(eldrin.topo());
// eldrin.adicionar("parabens");
// console.log(eldrin.topo());
// eldrin.adicionar("Avara que quebra");
// console.log(eldrin.topo());
// eldrin.adicionar("escadush");
// console.log(eldrin.topo());
// eldrin.adicionar("AAAAAARRRTHur");
// console.log(eldrin.topo());

// let fet = "";
// fet = eldrin.topo();

// eldrin.remover();

// console.log("feitico removido:" + fet);

// eldrin.limpar();
// eldrin.estavazia();
// console.log("pilha vazia!");



class spell
{
    constructor()
    {
        this.spells = [];
    }

    adiciona_feitico(spell)
    {
        this.spells.push(spell);
        console.log(`Feitiço ${spell} adicionado!`);
    }

    remover_feitico()
    {
        if (this.isempty()){
            console.log("nenhum feitiçoo na torre!");
            return;
        }
        console.log(`feitiço ${this.spells.pop()} removido`);
    }

    tamanhospell()
    {
        if (this.isempty()){
            console.log("nenhum feitiço para ver!");
            return;
        }
        console.log(`feitiço no topo ${this.spells[this.spells.length - 1]}`);
    }

    isempty()
    {
        return this.spells.length === 0;
    }
}

let power = new spell();

console.log(power.adiciona_feitico("abracadabra"));
console.log(power.adiciona_feitico("fisgar pombom"));
console.log(power.tamanhospell());
console.log(power.remover_feitico());
console.log(power.remover_feitico());
console.log(power.remover_feitico());


class tesouro
{
    constructor()
    {
        this.tesouro = [];
    }

    adicionar_tesouro(tesouro)
    {
        this.tesouro.push(tesouro);
        console.log("tesouro"+ tesouro +"guardado");
    }

    pegar_tesouro()
    {
        if (this.isempty()){
            console.log("nenhum tesouro guardado");
            return;
        }
        console.log(`tesouro ${this.tesouro.pop()} retirado`);
    }

    quantidade_tesouro()
    {
        if (this.isempty()){
            console.log("nenhum feitiço para ver!");
            return;
        }
        console.log(`feitiço no topo ${this.tesouro[this.tesouro.length - 1]}`);
    }

    isempty()
    {
        return this.tesouro.length === 0;
    }
}

let capitao = new tesouro()




