function calculaSaldo(saldo, itens) {
	if (!saldo || !itens || !itens.length) return 'Envie todos os parâmetros';

	const saldoFinal = itens.reduce((acc, item) => acc - item.preco, saldo);

	return `O seu saldo será de ${saldoFinal} reais após as compras.`;
}

lista = [
	{
		preco: 12,
		nome: 'cereal',
	},
	{
		preco: 30,
		nome: 'roupa',
	},
	{
		preco: 30,
		nome: 'toalha',
	},
];

saldo = 100;

console.log(calculaSaldo(saldo, lista));