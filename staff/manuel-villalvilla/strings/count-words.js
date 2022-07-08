function countWords(text) {
    let numeroEspacios = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ')
            numeroEspacios++;
    }
    return numeroEspacios + 1;
    // TODO ...
} 

// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5