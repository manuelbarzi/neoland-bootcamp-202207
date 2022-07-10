function pop(array) {
    var newString = array[array.length-1]
    
    //array.length-- -> Si lo hago de esta manera, y pasamos un array vacio nos dará error
    
    if(array.length > 0){ // Con esta comprobación, si pasamos array vacio nos devolverá undefined el "newString" y un array vacio "[]" el propio array
        array.length--
    }

    return newString
}

var arrayOfNumbers = [0, 1, 2, 3]

console.log(pop(arrayOfNumbers))
// expected output: 3
console.log(arrayOfNumbers)
// expected output: [0, 1, 2]

var animals = ['dog', 'cat', 'elephant']

console.log(pop(animals))
// expected output: 'elephant'

console.log(animals)
// expected output: ['dog', 'cat']