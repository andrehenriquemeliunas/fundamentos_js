const arrow = nome => `Meu nome é ${nome}`

const soma = (num1, num2) => num1 + num2

//Arrow function com + de uma linha de função

const somaNumerosPequenos = (num1, num2) => {
    if (num1 || num2 > 10){
        return "Somente numeros de 1 a 9"
    }else{
        return num1 + num2
    }
}