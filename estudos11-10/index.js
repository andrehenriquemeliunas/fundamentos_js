import fs from 'fs'

function trataErro(erro){
    throw new Error(erro.code, 'Não há arquivo no diretório')
}

//----------> async/await
async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8'
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        console.log(texto)
    }catch(erro){
        trataErro(erro)
    }
}


//----------> promises com then()

//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'utf-8'
//    fs.promises
//        .readFile(caminhoDoArquivo, encoding)
//        .then((texto) => console.log(texto))
//        .catch((trataErro))
//}

//function pegaArquivo(caminhoDoArquivo){
//    const encoding = 'utf-8'
//    fs.readFile(caminhoDoArquivo, encoding, (erro, texto ) => {
//        if(erro){
//            trataErro(erro)
//        }
//        console.log(texto)
//    })
//}

pegaArquivo('.estudos11-10/texto.md')