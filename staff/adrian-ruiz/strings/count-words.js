function countWords(text) {
    // TODO ...

    // Esto es para ver como funciona split
    /*
    var texto = text.split(" ")
    console.log(texto)

    return text.split(" ").length;
    */
    var spaceCount = 0;
    for(let i = 0; i < text.length; i++){
        if(text[i] === " "){
            spaceCount += 1; 
        }
    }
    return spaceCount++
}

// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5