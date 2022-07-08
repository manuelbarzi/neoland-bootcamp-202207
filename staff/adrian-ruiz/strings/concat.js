function concat(text, text2) {
    var resultado = ""

    for(let i = 0; i < arguments.length; i++){

        // Con concat
        //resultado = resultado.concat(arguments[i])
        
        resultado += arguments[i]
    }
    return resultado
}

// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding