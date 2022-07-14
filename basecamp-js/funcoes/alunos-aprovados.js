const alunos = [
	{
		nome: 'João',
		nota: 5,
	},
	{
		nome: 'Sofia',
		nota: 9,
	},
	{
		nome: 'Paulo',
		nota: 6,
	},
];

function alunosAprovados(alunos) {
	let aprovados = [];
    var media = 6

	for (let i = 0; i < alunos.length; i++) {
		let { nota, nome } = alunos[i];

		if (nota >= media) {
			aprovados.push(nome);
		}
	}

	return aprovados;
}

console.log(alunosAprovados(alunos));