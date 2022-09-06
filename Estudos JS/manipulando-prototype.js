function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoup(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

const priscila = new clientePoup("Priscila Pereira", "312312534322", "pry@email.com", 100, 2300)

console.log(priscila)

clientePoup.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor
}

priscila.depositarPoup(100)

console.log(priscila.saldoPoup)