function soma(num1, num2){
    return num1 + num2
}

console.log(soma(2, 2))

//----------------------------------------//

function nomeIdade(nome, idade){
    return `Meu nome é ${nome}, e tenho ${idade} anos.`
}

console.log(nomeIdade("André", 18))

//----------------------------------------//

function multiplica(num1, num2){
    return num1 * num2
}

console.log(multiplica(soma(4, 5), soma(3, 3)))

//----------------------------------------//

function comParametro(param) {
    console.log(param)
}
comParametro()