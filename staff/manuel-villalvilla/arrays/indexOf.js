function indexOf() {
    if (arguments.length < 2) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length === 2) {
        if (!Array.isArray(arguments[0])) {
            throw new Error ('First argument not an ARRAY');
        }
        if (arguments[1] instanceof Object) {
            throw new Error ('Element must no be an OBJECT');
        }
        const array = arguments[0];
        const value = arguments[1];
        for (var i = 0; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    }
    if (arguments.length === 3) {
        if (!Array.isArray(arguments[0])) {
            throw new Error ('First argument not an ARRAY');
        }
        if (arguments[1] instanceof Object) {
            throw new Error ('Element must no be an OBJECT');
        }
        if (isNaN(arguments[2]) || arguments[2] instanceof Object) {
            throw new Error ('fromIndex argument must be NUMBER');
        }
        const array = arguments[0];
        const value = arguments[1];
        let fromIndex = arguments[2];

        if (fromIndex < 0) {
            fromIndex = array.length + fromIndex;
        }
        if (fromIndex >= array.length) {
            return -1;
        }

        for (let i = fromIndex; i < array.length; i++) {
            if (array[i] === value) {
                return i;
            }
        }
        return -1;
    }
    if (arguments.length > 3) {
        throw new Error ('Too many ARGUMENTS');
    }
    
}

const exampleArray = ['dog', 'cat', 'elephant', 'monkey', 7, undefined, [3,4], 'rat', 'cat'];

console.log(indexOf(exampleArray, 'monkey'))
// expected output: 3

console.log(indexOf(exampleArray, 'hello'))
// expected output: -1

console.log(indexOf(exampleArray, 'cat', 4))
// expected output: 8

console.log(indexOf(exampleArray, 'cat', 12))
// expected output: -1

console.log(indexOf(exampleArray, 'cat', -4))
// expected output: 8

console.log(indexOf(exampleArray, undefined))
// expected output: 8

console.log(indexOf(exampleArray, 7, 4))
// expected output: 4

console.log(indexOf(exampleArray, 7, 5))
// expected output: -1