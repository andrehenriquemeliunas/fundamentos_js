const cliente = {
    nome: "André",
    idade: 36,
    cpf: "234231231",
    email: "andre@email.com",
    fones: ["5515991593410", "551532136588"]
}

cliente.dependentes = {
    nome: "Priscila",
    parentesco: "Mãe",
    dataNasc: "02/05/1967"
}

console.log(cliente)

cliente.dependentes.nome = "Priscila Pereira"

console.log(cliente)