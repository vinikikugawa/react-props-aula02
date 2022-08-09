import React from "react";
import ListaAlunos from "./components/ListaAlunos/ListaAlunos";

const App = () => {
  const aluno = "Paulo Henrique";
  const curso = "ADS";
  const alunos = ["Alexandre", "Ronqui", "Guilherme"];

  const novoAluno = () => "Ronqui";

  return (
    <>
      <h1>Trabalhando com PROPS</h1>
      <p>Aluno: {aluno}</p>
      <p>Curso: {curso}</p>
      <ListaAlunos alunos={alunos} maisAluno={novoAluno} />
    </>
  );
};

export default App;