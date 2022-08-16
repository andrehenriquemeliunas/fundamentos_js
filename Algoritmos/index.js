const {edFolha, edGalho} = require('./array-livros')

function juntaListas(lista1, lista2){
    let listaFinal = []
    let atualLista1 = 0
    let atualLista2 = 0
    let atual = 0//Ira manejar em que posição o array esta no momento

    while(atualLista1 < lista1.length &&  atualLista2 < lista2.length){
        let produtoAtualLista1 = lista1[atualLista1]
        let produtoAtualLista2 = lista2[atualLista2]

        if(produtoAtualLista1.preco < produtoAtualLista2.preco){
            listaFinal[atual] = produtoAtualLista1
            atualLista1++
        }else{
            listaFinal[atual] = produtoAtualLista2
            atualLista2++
        }

        atual++
    }

    while(atualLista1 < lista1.length){
        listaFinal[atual] = lista1[atualLista1]
        atualLista1++
        atual++
    }

    while(atualLista2 < lista2.length){
        listaFinal[atual] = lista2[atualLista2]
        atualLista2++
        atual++
    }

    return listaFinal
}

console.log(juntaListas(edFolha, edGalho))