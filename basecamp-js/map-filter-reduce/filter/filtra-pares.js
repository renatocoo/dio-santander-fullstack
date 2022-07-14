function filtraPares(arr) {
	if (!arr || !arr.length) return;

	return filteredArr = arr.filter((item) => item % 2 === 0);

}

const meuArray = [5, 8, 7, 12]

console.log(filtraPares(meuArray));