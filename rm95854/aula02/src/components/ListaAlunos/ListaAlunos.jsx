import React from 'react'

export default function ListaAlunos(props) {
    return (
        <ul>
            {
                props.alunos.map((aluno,i)=>
                <li key={i}>{aluno}</li>
            )}
        </ul>
    )
}
