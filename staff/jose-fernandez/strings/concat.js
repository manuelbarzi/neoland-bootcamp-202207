function concat() {
    let pep=''
    for(let i=0;i<arguments.length;i++){
        pep= pep+ arguments[i]
    }
    return pep
}

// tests

console.log(concat('Hola', 'Mundo'))
// HolaMundo

console.log(concat('Adios', 'Mundo', 'Cruel'))
// AdiosMundoCruel

console.log(concat('i', ' ', 'love', ' ', 'coding'))
// i love coding