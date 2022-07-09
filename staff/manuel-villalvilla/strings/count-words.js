function countWords(text) {
    let numeroEspacios = 0;
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ' && !(text[i+1] === ' '))
            numeroEspacios++;
    }
    return numeroEspacios + 1;
} 

// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('helloworld'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5