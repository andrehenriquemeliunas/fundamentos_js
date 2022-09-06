class cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(saldo)
    }
}

const andre = new cliente("André", "andre@gmail.com", "12312313", 1000)

console.log(andre)