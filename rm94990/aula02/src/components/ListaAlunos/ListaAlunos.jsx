import React from "react";

export default function ListaAlunos(props) {
  return (
    <ul>
      <li>{props.nomeQualquer[0]}</li>
      <li>{props.nomeQualquer[1]}</li>
      <li>{props.nomeQualquer[2]}</li>
      <li>{props.maisAluno()}</li>
    </ul>
  );
}
