function replace() {
    if (arguments.length < 3) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length > 3) {
        throw new Error ('Too many ARGUMENTS');
    }
    if (typeof arguments[0] !== 'string') {
        throw new Error ('First argument has to be STRING');
    }
    if (typeof arguments[1] !== 'object' && typeof arguments[1] !== 'string') {
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
    

    typeof arguments[1] === 'object' ? regExp = new RegExp(arguments[1]) : substr = arguments[1];
    typeof arguments[2] === 'string' ? newSubstr = arguments[2] : replacerFunction = arguments[2];

    // caso de buscar con RegExp y reemplazar match(es) con newSubstr
    if(regExp && newSubstr) {
        if (regExp.test(string)) {
            newString = regExp[Symbol.replace](string, newSubstr); // metodo del objeto RegExp
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
    // caso de buscar con substr y reemplazar con newSubstr | solo reemplazo el primer match
    if (substr && newSubstr) {
        let charMatches = 0;
        // itero por todo el string
        for (let i = 0; i < string.length; i++) {
            if (substr[0] === string[i]) {
                let index = i;
                // si match, itero por el substr
                for (let j = 0; j < substr.length; j++) {
                    if (substr[j] === string[i]) {
                        charMatches++;
                        i++;
                        if (charMatches === substr.length) {
                            // construyo el newString
                            // desde string[0] hasta string[match[0]]
                            for (let z = 0; z < index; z++) { 
                                newString += string[z];
                            }
                            // añado el replacement
                            newString += newSubstr; 
                            // desde string[match[end]] hasta el final del string
                            for (let a = index + substr.length; a < string.length; a++) { 
                                newString += string[a];
                            }
                            return newString;
                        }
                    } else {
                        break;
                    }
                }
            } 
        }
        return string;
    }
    // caso de buscar con substr y reemplazar con replacerFunction
    if (substr && replacerFunction) {
        // TODO
    }
}

const string = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

console.log(replace(string, /Dog/i, 'cat'));
// expected output 'The quick brown fox jumps over the lazy cat. If the dog reacted, was it really lazy?'
console.log(replace(string, /Dog/ig, 'cat')); // con global
// expected output 'The quick brown fox jumps over the lazy cat. If the cat reacted, was it really lazy?'
console.log(replace(string, /Dog/i, function(match) {return match = 'cat'})); // funciona pero no entiendo sus posibilidades
// expected output 'The quick brown fox jumps over the lazy cat. If the dog reacted, was it really lazy?'
console.log(replace(string, 'brown', 'white'));
// expected output 'The quick white fox jumps over the lazy dog. If the dog reacted, was it really lazy?'
console.log(replace(string, 'dog', 'lion'));
// expected output 'The quick brown fox jumps over the lazy lion. If the dog reacted, was it really lazy?'

