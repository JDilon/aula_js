function somadospares(array){
    let soma = 0;

    array.forEach(num => {
        if (num % 2 === 0){
            soma += num;
        }
        
    });

    return soma;
}

let numero = [1,2,3,4,5,6,7,8,9];
console.log(somadospares(numero));