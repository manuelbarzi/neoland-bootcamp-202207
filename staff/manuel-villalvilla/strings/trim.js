function trim() {
    if (arguments.length < 1 || arguments.length > 1) {
        throw new Error ('Only 1 ARGUMENT needed');
    }
    if (typeof arguments[0] !== 'string') {
        throw new Error ('Argument has to be STRING');
    }

    const string = arguments[0];
    let indexStart = 0;
    let indexEnd = 0;
    let newString = '';
    
    // averiguo donde empieza el primer caracter del string distinto a un espacio y lo guardo
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== ' ') {
            indexStart = i;
            break;
        }
    }
    // averiguo donde empieza el primer caracter del string desde el final del string y lo guardo
    for (let z = string.length - 1; z > -1; z--) {
        if (string[z] !== ' ') {
            indexEnd = z;
            break;
        }
    }
    // bucle para construir newString a partir de los indices guardados
    for (let a = indexStart; a < indexEnd + 1; a++) {
        newString += string[a];
    }
    return newString;
}

const string = '    Hello    World    ';
console.log("'" + trim(string) + "'");
// expected output 'Hello    World'
const string2 = '  Hello    World   ';
console.log("'" + trim(string2) + "'");
// expected output 'Hello    World'
const string3 = 'Hello    World';
console.log("'" + trim(string3) + "'");
// expected output 'Hello    World'
const string4 = '   Hello    World';
console.log("'" + trim(string4) + "'");
// expected output 'Hello    World'
const string5 = 'Hello    World  ';
console.log("'" + trim(string5) + "'");
// expected output 'Hello    World'
