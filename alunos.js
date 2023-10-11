//alunos

const alunos = [{nome: 'Pedro', nota: 5}, {nome: 'Kaio', nota: 10}, {nome: 'Gabriela', nota: 7}]

const alunosNota = alunos.map(aluno => {
    nomeAluno = ('Nome do Aluno')
    notaAluno = ('Nota do Aluno')


return {
    nome: nomeAluno,
    nota: notaAluno
}

}) .filter(aluno => {
    if (aluno.nota >= 6) {
        return aluno
    }
})

console.log(alunosNota);