const notas = [10, 9, 8, 6, 7]

const novasNotas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(novasNotas)