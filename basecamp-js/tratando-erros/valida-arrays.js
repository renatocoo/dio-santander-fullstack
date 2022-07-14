function validaArray(arr, num){
   try{
    if(!arr && !num) throw new ReferenceError("Envie os parâmetros");

    if(typeof arr !=='object') throw new TypeError("Array precisa ser um objeto");

    if(typeof arr !=='number') throw new TypeError("Num precisa ser um numero");

    if(arr.length !== num) throw new RangeError("Tamanho inválido");

    return arr;
   }
   catch(e){
    if(e instanceof ReferenceError){
        console.log("Este erro eh um ReferenceError")
        throw e;
    } else if(e instanceof TypeError){
        console.log("Este erro eh um TypeError")
        throw e;
    } else if(e instanceof RangeError){
        console.log("Este erro eh um RangeError")
        throw e;
    } else {
        console.log(`Tipo de erro não esperado:${e}`) 
    }
   }
}

console.log(validaArray())