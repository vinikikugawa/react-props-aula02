import React from "react";
import ListaAlunos from "./components/ListaAlunos/ListaAlunos";
import "./App.css";

const App = () => {
	const aluno = "Leo Longo";
	const curso = "ADS";
	const alunos = ["Leonardo", "Yasmin", "Pedro"];

	return (
		<div>
			<h1>Trabalhando com PROPS</h1>
			<p>Aluno : {aluno}</p>
			<p>Curso : {curso}</p>
			<ListaAlunos alunos={alunos} />
		</div>
	);
};

export default App;
