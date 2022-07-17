function shift() {
    if (arguments.length > 1 || arguments.length < 1) {
        throw new Error ('Only 1 ARGUMENT required');
    }
    if (!Array.isArray(arguments[0])) {
        throw new Error ('Argument has to be ARRAY');
    }

    const array = arguments[0];
    let firstItem = array[0];
    // reemplazo cada valor por valor en indice superior
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i+1];
    }
    // reduzco el array en 1 siempre que su length sea mayor que 0
    if (array.length > 0) {
        array.length = array.length - 1;
    }

    return firstItem;
}

const array = [1, [2], 3];
console.log(shift(array));
// expected output 1
console.log(array);
// expected output [2], 3

const names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];
while (typeof (i = shift(names)) !== 'undefined') { // preguntar si no es necesario declarar la variable i en memoria antes.
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
console.log(names);