// crie um objecto para armazenar inforçaos de alunos, onde a 
// chave é o número de matricola e o valor é o nome do aluno.
// Adicione pelo menos 3 alunos ao dicionario e exiba os nomes 
// interando sobre as chaves.

let aluno = {
    R123456789: "Marcos",
    R963852741: "Leo",
    R456789132: "Gregorio"
}

for (let chave in aluno) {
    console.log(`${chave}: ${aluno[chave]}`)
}


