function toString() {
    if (arguments.length === 0) {
        throw new Error ('1 ARGUMENTt with an array required');
    }
    if (arguments.length > 1) {
        throw new Error ('Too many arguments. Just 1 ARGUMENT required');
    }
    if (!Array.isArray(arguments[0])) {
        throw new Error ('Argument has to be ARRAY');
    }
    if (arguments[0].length === 0) {
        throw new Error ('Array must not be EMPTY');
    }

    const array = arguments[0];
    let newString = '';
    // en realidad el metodo internamente llamaria al metodo join para unir en una string los elementos del array
    for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
            newString += array[i];
        } else {
            newString += array[i] + ',';
        }
    }

    return newString;
}

const array = [1, 2, 'a', '1a'];

console.log(toString(array));
// expected output 1,2,a,1a