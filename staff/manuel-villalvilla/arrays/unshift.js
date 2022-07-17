function unshift() {
    if (arguments.length < 2) {
        throw new Error ('Minimum 2 ARGUMENTS required');
    }
    if (!Array.isArray(arguments[0])) {
        throw new Error ('First argument has to be ARRAY');
    }
    
    const array = arguments[0];
    const elementCount = arguments.length - 1;

    // estiro el array
    array.length = array.length + elementCount;
    // desplazo items del principio hacia el final del array
    for (let i = 0; i < array.length - elementCount; i++) {
        array[i+elementCount] = array[i];
    }
    // inserto los elementos al principio
    for (let z = 0; z < elementCount; z++) {
        array[z] = arguments[z+1];
    }
    return array.length;
}

const array = [4, 5, 6];
console.log(unshift(array, 1, 2, 3));
// expected output 6
console.log(array);
// expected output [1, 2, 3, 4, 5, 6]