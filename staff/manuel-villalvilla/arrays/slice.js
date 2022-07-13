function slice (array, ...args) {
    if (!(array instanceof Array)) {
        throw new Error (`${array} is not an ARRAY`);
    }
    if (args.length > 2) {
        throw new Error ('Argument length EXCEEDED');
    }
    for (let i = 0; i < args.length; i++) {
        if (isNaN(args[i])) {
            throw new Error (`${args[i]} is not a NUMBER`);
        }
    }
    if (args.length === 2) {
        if (args[0] < 0) {
            args[0] = array.length + args[0];
        }
        if (args[1] < 0) {
            args[1] = array.length + args[1];
        }
        let newArray = [];
        for (let i = args[0]; i < args[1]; i++) {
            newArray[newArray.length] = array[i];
        }
        return newArray;
    } else if (args.length === 1) {
        if (args[0] < 0) {
            args[0] = array.length + args[0];
        }
        let newArray = [];
            for (let i = args[0]; i < array.length; i++) {
                newArray[newArray.length] = array[i];
            }
            return newArray;
    } else if (args.length === 0) {
        let newArray = [];
        for (let i = 0; i < array.length; i++) {
            newArray[newArray.length] = array[i];
        }
        return newArray;
    }
}

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(slice(animals, 2, 4));
// expected output: Array ["camel", "duck"]

console.log(slice(animals, 1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(slice(animals, 2, -1));
// expected output: Array ["camel", "duck"]

console.log(slice(animals, 2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(slice(animals, -2));
// expected output: Array ["duck", "elephant"]

console.log(slice(animals));
// expected output: Array ["ant", "bison", "camel", "duck", "elephant"]