const precosLivros = [
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

let maisBarato = 0

for ( let atual = 0; atual < precosLivros.length; atual++){
    if (precosLivros[atual].preco < precosLivros[maisBarato].preco){
        maisBarato = atual
    }
}

console.log(`O livro mais barato custa ${precosLivros[maisBarato].preco} e seu nome é ${precosLivros[maisBarato].titulo}`)

