function concat(text, text2) {
    let texto = '';
    for (var i = 0; i < arguments.length; i++) {
        texto += arguments[i];
    }
    return texto;
}

// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding