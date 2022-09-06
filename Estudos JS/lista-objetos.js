const cliente = {
    nome: "André Henrique",
    idade: 36,
    cpf: "234231231",
    email: "andre@email.com",
    fones: ["5515991593410", "551532136588"],
    dependentes: [{
        nome: "Priscila Pereira",
        parentesco: "Mãe",
        dataNasc: "02/05/1967"
    }]
}

cliente.dependentes.push({
    nome: "Flok Tobias",
    parentesco: "Cachorro",
    dataNasc: "10/03/2020"
})

const dog = cliente.dependentes.filter(dependente => dependente.dataNasc === "10/03/2020")

console.log(dog[0].nome)