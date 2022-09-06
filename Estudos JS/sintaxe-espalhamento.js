const cliente = [
    {
    nome: "André Henrique",
    idade: 36,
    cpf: "234231231",
    dependentes: [{
        nome: "Priscila Pereira",
        parentesco: "Mãe",
        dataNasc: "02/05/1967"
    },
    {
        nome: "Flok Tobias",
        parentesco: "Cachorro",
        dataNasc: "10/03/2020"
    }],
    },

    {
        nome: "Joana",
        idade: 36,
        cpf: "234231231",
        dependentes: [{
            nome: "Diana",
            parentesco: "Cadela",
            dataNasc: "02/05/1967"
        },
        {
            nome: "Lucky",
            parentesco: "Cachorro",
            dataNasc: "10/03/2020"
        }],  
    }
]

const listaDependentes = [... cliente[0].dependentes, ... cliente[1].dependentes]

console.log(listaDependentes)

