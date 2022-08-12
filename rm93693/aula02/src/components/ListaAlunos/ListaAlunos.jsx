import React from "react";
import "./ListaAlunos.css";

export default function ListaAlunos(props) {
  return (
    <ul className="listaAluno">
      {
      props.alunos.map((aluno, i) =>
      <li key={i}>{aluno}</li>
      )}
    </ul>
  );
}
