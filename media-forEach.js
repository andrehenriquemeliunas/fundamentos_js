const notas = [10, 6.5, 8, 7]

let somaNotas = 0

notas.forEach(function(nota){
    somaNotas += nota
})

let media = somaNotas/notas.length

console.log(media)