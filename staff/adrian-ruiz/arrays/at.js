function at(array) {
    
    return array[arguments[arguments.length-1]]
}

console.log(at(['cat', 'dog', 'elephant'], 2))
// expected output 'elephant'

console.log(at(['Adiós', 1, 'Mundo'], 0))
// expected output 'Adiós'