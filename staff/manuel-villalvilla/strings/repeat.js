function repeat() {
    if (arguments.length < 2) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length > 2) {
        throw new Error ('Too many ARGUMENTS');
    }
    if (typeof arguments[0] !== 'string') {
        throw new Error ('First argument has to be STRING');
    }
    if (isNaN(arguments[1])) {
        throw new Error ('Second argument has to be NUMBER');
    }

    const string = arguments[0];
    // convierto a integer siguiendo las premisas del metodo repeat y compruebo validez
    const count = parseInt(arguments[1]);
    if (count < 0 || count === Infinity) {
        throw new Error ('Count value out of RANGE');
    }
    let newString = '';
    
    for (let i = 0; i < count; i++) {
        newString += string;
    }
    return newString;
}

console.log(repeat('Hola,', 4));
// expected output Hola,Hola,Hola,Hola,
console.log(repeat('Hola', 0));
// expected output ''