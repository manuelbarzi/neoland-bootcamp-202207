function concat(text, text2) {
    var frase=""
    for (i = 0; i < arguments.length; i++){
        frase = frase + arguments[i]
    }
    return frase
}
// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding