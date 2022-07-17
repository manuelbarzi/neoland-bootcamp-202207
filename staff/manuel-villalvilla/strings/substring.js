function substring() {
    if (arguments.length < 2) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length > 3) {
        throw new Error ('Too many ARGUMENTS');
    }
    if (arguments.length === 2) {
        if (typeof arguments[0] !== 'string') {
            throw new Error ('First argument has to be STRING');
        }
        if (typeof arguments[1] !== 'number') {
            throw new Error ('Second argument has to be NUMBER');
        }

        const string = arguments[0];
        let indexStart = arguments[1];
        let newString = '';
        // arreglo indexStart segun documentacion (diferencia con slice)
        if (indexStart < 0 || indexStart === NaN) {
            indexStart = 0;
        }
        if (indexStart > string.length) {
            indexStart = string.length;
        }
        // bucle para construir newString desde indexStart hasta el final
        for (let i = indexStart; i < string.length; i++) {
            newString += string[i];
        }
        return newString;
    }
    if (arguments.length === 3) {
        if (typeof arguments[0] !== 'string') {
            throw new Error ('First argument has to be STRING');
        }
        if (typeof arguments[1] !== 'number') {
            throw new Error ('Second argument has to be NUMBER');
        }
        if (typeof arguments[2] !== 'number') {
            throw new Error ('Third argument has to be NUMBER');
        }

        const string = arguments[0];
        let indexStart = arguments[1];
        let indexEnd = arguments[2];
        let newString = '';
        // arreglo indexStart e indexEnd segun documentacion (diferencia con slice)
        if (indexStart < 0 || indexStart === NaN) {
            indexStart = 0;
        }
        if (indexStart > string.length) {
            indexStart = string.length;
        }
        if (indexEnd < 0 || indexEnd === NaN) {
            indexEnd = 0;
        }
        if (indexEnd > string.length) {
            indexEnd = string.length;
        }
        // cambio uno por otro si indexStart > indexEnd (diferencia con slice)
        if (indexStart > indexEnd) {
            const temp = indexStart;
            indexStart = indexEnd;
            indexEnd = temp;
        }
        // bucle para construir newString desde indexStart hasta indexEnd
        for (let i = indexStart; i < indexEnd; i++) {
            newString += string[i];
        }
        return newString;
    }
}

const string = 'Mozilla';

console.log(substring(string, 2));
// expected output lla
console.log(substring(string, 2, 5));
// expected output zil
console.log(substring(string, 0, 1));
console.log(substring(string, 1, 0));
// both expected output M
console.log(substring(string, 0, 6));
// expected output Mozill
console.log(substring(string, 4));
console.log(substring(string, 4, 7));
console.log(substring(string, 7, 4));
// expected previous 3 outputs lla
console.log(substring(string, 0, 7));
console.log(substring(string, 0, 10));
// both expected output Mozilla
console.log(substring(string, string.length - 4));
// using substring with length property. expected output last 4 characters illa


