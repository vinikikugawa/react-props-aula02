import React from "react";

export default function ListaAlunos(props) {
  return (
    <ul>

      {
        props.nomeQualquer.map((aluno, i) =>
        <li key={i}>{i+1} - {aluno}</li>

      )}
    </ul>
  );
}
