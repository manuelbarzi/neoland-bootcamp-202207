function reduce() {
    if (arguments.length < 2) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length === 2) {
        if (!Array.isArray(arguments[0])) {
            throw new Error ('First argument has to be ARRAY');
        }
        // cumplo premisa del metodo reduce
        if (arguments[0].length === 0) {
            throw new Error ('This empty array requires INITIAL VALUE');
        }
        if (typeof arguments[1] !== 'function') {
            throw new Error ('Second argument has to be FUNCTION');
        }
        
        const array = arguments[0];
        const callbackFn = arguments[1];
        // declaro variables
        let previous = array[0];
        let current;
        let returns;
        // itero en bucle desde indice 1 porque no se ha pasado un initialValue, por tanto: previous = array[0]
        for (let i = 1; i < array.length; i++) {
            current = array[i];
            returns = callbackFn(previous, current);
            previous = returns;
        }

        return returns;
    }
    if (arguments.length === 3) {
        if (!Array.isArray(arguments[0])) {
            throw new Error ('First argument has to be ARRAY');
        }
        if (typeof arguments[1] !== 'function') {
            throw new Error ('Second argument has to be FUNCTION');
        }
        if (isNaN(arguments[2])) {
            throw new Error ('Third argument has to be NUMBER');
        }
        
        const array = arguments[0];
        const callbackFn = arguments[1];
        const initialValue = arguments[2];

        // declaro variables atendiendo a las premisas del metodo reduce
        let previous = initialValue;
        let current = array[0];
        let returns;
        // itero en bucle desde indice 0 porque se ha pasado un initialValue
        for (let i = 0; i < array.length; i++) {
            returns = callbackFn(previous, current);
            previous = returns;
            current = array[i+1];
        }

        return returns;
    }
}

const array1 = [15, 16, 17, 18, 19];
const array2 = [{x: 1}, {x: 2}, {x: 3}];
const array3 = [];

function reducer(previous, current, index, array) {
    const returns = previous + current;
    return returns;
}

function reducer2(previous, current) {
    return previous + current.x;
}

console.log(reduce(array1, reducer));
// expected output 85
console.log(reduce(array1, reducer, 10));
// expected output 95
console.log(reduce(array2, reducer2, 0));
// expected output 6
// console.log(reduce(array3, reducer));
// expected error


