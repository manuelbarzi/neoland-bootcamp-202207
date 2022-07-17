function replaceAll() {
    if (arguments.length < 3) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length > 3) {
        throw new Error ('Too many ARGUMENTS');
    }
    if (typeof arguments[0] !== 'string') {
        throw new Error ('First argument has to be STRING');
    }
    if (!(arguments[1] instanceof RegExp) && typeof arguments[1] !== 'string') {
        throw new Error ('Second argument has to be REGEXP or STRING');
    }
    if (typeof arguments[2] !== 'string' && typeof arguments[2] !== 'function') {
        throw new Error ('Third argument has to be FUNCTION or STRING');
    }

    const string = arguments[0];
    let regExp;
    let substr;
    let newSubstr;
    let replacerFunction;
    let newString = '';
    
    // asigno las variables en funcion del tipo de argumentos pasados
    arguments[1] instanceof RegExp ? regExp = new RegExp(arguments[1]) : substr = arguments[1];
    // compruebo si el RegExp tiene variable global requerida para esta funcion
    if (regExp && !regExp.global) {
        throw new Error ('replaceAll must be called with a global RegExp');
    }
    typeof arguments[2] === 'string' ? newSubstr = arguments[2] : replacerFunction = arguments[2];

    // caso de buscar con RegExp y reemplazar match(es) con newSubstr
    if(regExp && newSubstr) {
        if (regExp.test(string)) {
            // metodo del objeto RegExp. Segun documentacion, el metodo string.prototype.replace llama a este metodo regExp en su interior.
            newString = regExp[Symbol.replace](string, newSubstr); 
            return newString;
        } else {
            return string;
        }
    }
    // caso de buscar con RegExp y reemplazar con replacerFunction
    if (regExp && replacerFunction) {
        if (regExp.test(string)) {
            newString = regExp[Symbol.replace](string, replacerFunction);
            return newString;
        } else {
            return string;
        }
    }
    // caso de buscar con substr y reemplazar con newSubstr | reemplazo todos los matches segun documentacion
    if (substr && newSubstr) {
        let charMatches = 0;
        // itero por todo el string y voy construyendo newString
        for (let i = 0; i < string.length; i++) {
            if (substr[0] === string[i]) {
                let index = i;
                // si match, itero por el substr
                for (let j = 0; j < substr.length; j++) {
                    if (substr[j] === string[index]) {
                        charMatches++;
                        index++;
                        if (charMatches === substr.length) {
                            // añado el replacement
                            newString += newSubstr;
                            // como el index ahora va 1 por delante de todo el match, reasigno i para que se siga escribiendo la continuacion del string
                            i = index - 1;
                            charMatches = 0;
                            index = 0;
                            break;
                        }
                    } else {
                        // si falla el match completo, reseteo valores y construyo newString
                        newString += string[i];
                        charMatches = 0;
                        index = 0;
                        break;
                    }
                }
            } else {
                // construyo el newString hasta el siguiente match
                newString += string[i];
            }
        }
        return newString;
    }
    // caso de buscar con substr y reemplazar con replacerFunction 
    if (substr && replacerFunction) {
        let charMatches = 0;
        // itero por todo el string y voy construyendo newString
        for (let i = 0; i < string.length; i++) {
            if (substr[0] === string[i]) {
                let index = i;
                // si match, itero por el substr
                for (let j = 0; j < substr.length; j++) {
                    if (substr[j] === string[index]) {
                        charMatches++;
                        index++;
                        if (charMatches === substr.length) {
                            // añado el replacement
                            newString += replacerFunction(); // tengo que mejorarlo cuando lo entienda
                            // como el index ahora va 1 por delante de todo el match, reasigno i para que se siga escribiendo la continuacion del string
                            i = index - 1;
                            charMatches = 0;
                            index = 0;
                            break;
                        }
                    } else {
                        // si falla el match completo, reseteo valores y construyo newString
                        newString += string[i];
                        charMatches = 0;
                        index = 0;
                        break;
                    }
                }
            } else {
                // construyo el newString hasta el siguiente match
                newString += string[i];
            }
        }
        return newString;
    }
}

const string = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

// console.log(replaceAll(string, /Dog/i, 'elephant')); // error RegExp correcto
// expected output 'The quick brown fox jumps over the lazy elephant. If the dog reacted, was it really lazy?'
console.log(replaceAll(string, /Dog/ig, 'elephant')); // con global
// expected output 'The quick brown fox jumps over the lazy elephant. If the elephant reacted, was it really lazy?'
console.log(replaceAll(string, /Dog/ig, function(match) {return match = 'cat'})); // funciona pero no entiendo sus posibilidades
// expected output 'The quick brown fox jumps over the lazy cat. If the cat reacted, was it really lazy?'
console.log(replaceAll(string, 'brown', 'yellow'));
// expected output 'The quick yellow fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
console.log(replaceAll(string, 'dog', 'lion')); // 2 matches y reemplaza los dos
// expected output 'The quick brown fox jumps over the lazy lion. If the lion reacted, was it really lazy?'
console.log(replaceAll(string, 'dogsss', 'lion')); // sin matches
// expected output 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
console.log(replaceAll(string, 'dog', function(match) {return match = 'elephant'})); // funciona pero no entiendo sus posibilidades
// expected output 'The quick brown fox jumps over the lazy elephant. If the elephant reacted, was it really lazy?'
console.log(replaceAll(string, 'dogss', function(match) {return match = 'elephant'})); // Sin matches. Funciona pero no entiendo sus posibilidades
// expected output 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?'

