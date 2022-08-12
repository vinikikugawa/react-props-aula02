import React from "react";
import ListaAlunos from "./components/ListaAlunos/ListaAlunos";
import './App.css'
const App = () => {
  const aluno = "Corinthians da Silva";
  const curso = "ADS";
  const alunos = ["Alexandre", "Ronqui", "Guilherme", "Sigma"];

  const novoAluno = () => "Ronqui";

  return (
    <div>
      <h1>PROPS da silva</h1>
      <p>Aluno: {aluno}</p>
      <p>Curso: {curso}</p>
      <ListaAlunos nomeQualquer={alunos} />
    </div>
  );
};

export default App;
