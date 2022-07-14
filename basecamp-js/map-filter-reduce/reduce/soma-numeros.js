function somaNumeros(arr) {
    return arr.reduce((prev, current) => prev + current);
}

const arr = [1, 2]

console.log(somaNumeros(arr))