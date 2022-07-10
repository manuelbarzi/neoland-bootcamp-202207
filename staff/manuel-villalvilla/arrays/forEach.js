function forEach (functionforEach, array) {
    for (var i = 0; i < array.length; i++) {
        functionforEach(array[i]);
    }
    return undefined;
}

var arrayOfNumbers = [34, 56, 76, 87];

var suma = 0;
forEach(sumar, arrayOfNumbers);
console.log(suma);
// expected output 253

function sumar(elementos) {
    suma += elementos;
}