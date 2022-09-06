const alunos = ['André', 'Vitor', 'Marcela', 'João']

const media = [9, 8, 8, 10]

const lerNotasAlunos = [alunos, media]

const procurar = (nomeDoAluno) => {
    if (lerNotasAlunos[0].includes(nomeDoAluno)){
        indice = lerNotasAlunos[0].indexOf(nomeDoAluno)
        return 'Aluno ' + lerNotasAlunos[0][indice] + ' sua média é ' + lerNotasAlunos[1][indice]
    }else{
        return "Aluno não cadastrado"
    }
}

console.log(procurar("André"))