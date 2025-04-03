

// implemente uma função quye receba uma string e retorne um objeto
//  onde chaves são os caracteres e os valores, o numero de vezes que 
//  aparecem na string. ignore os espaços


function contaLetra(palavra)
{
    const contagem = {};

    for (let i = 0; i < palavra.length; i++)
    {
    let char = palavra[i];
    
    if (char === " ") 
    {
        continue;
    }

    if (contagem[char])
    {
        contagem[char] += 1;
    } else {
        contagem[char] = 1;
    }
    }

    return contagem;
}

let texto = "flanelinha";
let resultado = contaLetra(texto);

console.log(resultado);