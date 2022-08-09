import React from 'react'
import ListaAlunos from './components/ListaAlunos/ListaAlunos'

const App = () => {

    const aluno = 'Vinícius Yoda'
    const curso = 'ADS'
    const alunos = ['Arvelan', 'Igor', 'Raphael']

    const novoAluno = () => 'Mario'

    return(
        <div>
            <h1>Trabalhando com props</h1>
            <p>Aluno : {aluno}</p>
            <p>Curso : {curso}</p>
            <ListaAlunos alunos={alunos} maisAluno={novoAluno} />
        </div>
    )
}

export default App