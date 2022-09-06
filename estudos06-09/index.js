const listaLivros = require('./array')

function mergeSort(array){
    if(array.length > 1){//Verifica se o array é mais que 1
        const meio = Math.floor(array.length / 2)//Divide o array no meio, assim como falamos nas anotações
        const parte1 = mergeSort(array.slice(0, meio))//Subdivide o array o índice 0 até o meio
        const parte2 = mergeSort(array.slice(meio, array.length))//Subdivide o array o índice meio até o fim
        array = ordena(parte1, parte2)//Ordena as partes pela função abaixo
    }
    //Ele vai dividndo o array até a condição (> 1) for verdadeira, retornando apenas o array, pois apenas 1 elemento já esta ordenado
    return array
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        }else{
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length ? parte1.slice(posicaoAtualParte1) : parte2.slice(posicaoAtualParte2))
}

console.log(mergeSort(listaLivros))