const livros = require('./reaproveitando-codigo')
const menorValor = require('./exibindo-livros')

for ( let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)