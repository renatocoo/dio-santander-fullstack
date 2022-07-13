const form = document.getElementById('form-tarefa');
const listaTarefa = document.getElementById('tarefas');

form.onsubmit = function (e) {
	e.preventDefault();
	const inputField = document.getElementById('input-tarefa');
	adicionaTarefa(inputField.value);
	form.reset();
};

function adicionaTarefa(description) {
	const containerTarefa = document.createElement('div');
	const novaTarefa = document.createElement('input');
	const etiquetaTarefa = document.createElement('label');
	const descricaoTarefaNode = document.createTextNode(description);

	novaTarefa.setAttribute('type', 'checkbox');
	novaTarefa.setAttribute('name', description);
	novaTarefa.setAttribute('id', description);

	etiquetaTarefa.setAttribute('for', description);
	etiquetaTarefa.appendChild(descricaoTarefaNode);

	containerTarefa.classList.add('item-tarefa');
	containerTarefa.appendChild(novaTarefa);
	containerTarefa.appendChild(etiquetaTarefa);

	listaTarefa.appendChild(containerTarefa);
}