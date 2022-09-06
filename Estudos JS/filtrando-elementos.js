const nomes = ["André", "Marcela", "João", "Vitor"]
const notas = [7, 4.5, 8, 5.5]

const reprovados = nomes.filter((aluno,indice) => notas[indice] < 5 )

console.log(reprovados)