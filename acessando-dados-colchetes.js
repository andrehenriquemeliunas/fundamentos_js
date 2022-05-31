const cliente = {
    nome: "André",
    idade: 36,
    cpf: "234231231",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

chaves.forEach(infos => console.log(cliente[infos]))