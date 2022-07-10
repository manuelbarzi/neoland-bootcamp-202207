var arrayOfNumbers = [34, 56, 76, 87];
var suma = 0;

function forEach(forEachFunc, array){
    for(let i = 0; i < array.length ; i++){
        forEachFunc(array[i])
    }
    return suma
}

forEach(sumar, arrayOfNumbers);
console.log(suma);
// expected output 253

function sumar(elementos) {
    suma += elementos;
}