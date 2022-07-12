const arrProdutos = [
    {
        titulo: "JavaScript",
        preco: 25},
    {
        titulo: "PHP",
        preco: 15},
    {
        titulo: "Java",
        preco: 30},
    {
        titulo: "Elixir",
        preco: 50},
    {
        titulo: "Go",
        preco: 45},
    {
        titulo: "Python",
        preco: 20}
]

function menorValor(arrProdutos, posicaoInicial){
        let maisBarato = posicaoInicial
        for ( let atual = posicaoInicial; atual < arrProdutos.length; atual++){
        if (arrProdutos[atual].preco < arrProdutos[maisBarato].preco){
            maisBarato = atual
        }
    }
    return maisBarato
}

