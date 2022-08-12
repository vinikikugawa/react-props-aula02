import React from 'react'
import ListaAlunos from './components/ListaAlunos/ListaAlunos'
import './App.css'

const App = () => {

    const aluno = 'Vinícius Yoda'
    const curso = 'ADS'
    const alunos = ['Arvelan', 'Igor', 'Raphael', 'Fernando']

    const novoAluno = () => 'Mario'

    return(
        <div>
            <h1>Trabalhando com props</h1>
            <p>Aluno : {aluno}</p>
            <p>Curso : {curso}</p>
            <ListaAlunos alunos={alunos}  />
        </div>
    )
}

export default App