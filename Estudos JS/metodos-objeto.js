const cliente = {
    nome: "André Henrique Meliunas",
    idade: 18,
    cpf: "234231231",
    email: "andre@email.com",
    fones: ["5515991593410", "551532136588"],
    dependentes: [
    {
        nome: "Priscila Pereira",
        parentesco: "Mãe",
        dataNasc: "02/05/1967"},
    {
        nome: "Flok Tobias",
        parentesco: "Cachorro",
        dataNasc: "10/03/2020"}
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
        //this -> palavra reservada que se refere literalmente a "isso", ou seja, esse objeto, essa instância (saldo).
    }
}

function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente)
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro para ${obj.nome}`)
    }
}

oferecerSeguro(cliente)