function slice() {
    if (arguments.length < 2) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length === 2) {
        if (typeof arguments[0] !== 'string') {
            throw new Error ('First argument has to be STRING');
        }
        if (isNaN(Number(arguments[1]))) {
            arguments[1] = 0;
        }
        const string = arguments[0];
        let indexStart = arguments[1];
        if (indexStart < 0) {
            indexStart = string.length + indexStart;
        }
        let newString = '';

        for (let i = indexStart; i < string.length; i++) {
            newString = newString + string[i];
        }
        return newString;
    }
    if (arguments.length === 3) {
        if (typeof arguments[0] !== 'string') {
            throw new Error ('First argument has to be STRING');
        }
        if (isNaN(Number(arguments[1]))) {
            arguments[1] = 0;
        }
        if (isNaN(Number(arguments[2]))) {
            arguments[2] = arguments[0].length;
        }
        const string = arguments[0];
        let indexStart = arguments[1];
        if (indexStart < 0) {
            indexStart = string.length + indexStart;
        }
        let indexEnd = arguments[2];
        if (indexEnd < 0) {
            indexEnd = string.length + indexEnd;
        }
        let newString = '';
        for (let i = indexStart; i < indexEnd; i++) {
            newString = newString + string[i];
        }
        return newString;
    }
}

const string = 'Hoy estoy escribiendo la funcion slice';
console.log(slice(string, -5));
// expected output 'slice'
console.log(slice(string, 6));
// expected output 'toy escribiendo la funcion slice'
console.log(slice(string, 50));
// expected output ''
console.log(slice(string, 0));
// expected output 'Hoy estoy escribiendo la funcion slice'
console.log(slice(string, 10, 15));
// expected output 'escri'
console.log(slice(string, 10, -6));
// expected output 'escribiendo la funcion'
console.log(slice(string, 10, 5));
// expected output ''
console.log(slice(string, -10, -6));
// expected output 'cion'
console.log(slice(string, 'i', 5));
// expected output 'Hoy e'
console.log(slice(string, 30, 'j'));
// expected output 'on slice'
console.log(slice(string, undefined, 5));
// expected output 'Hoy e'
console.log(slice(string, 30, undefined));
// expected output 'on slice'
console.log(slice(string, ['2'], 5));
// expected output 'y e'
console.log(slice(string, 30, ['j']));
// expected output 'on slice'

