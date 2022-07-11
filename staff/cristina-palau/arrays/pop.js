/*function pop(array) {
    console.log(array.pop())}
    delete array[array.length - 1]*/

function pop(array) {
    let lastElement = array[array.length - 1]
    array.length = array.length - 1    
    return lastElement
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

// let newArray = []
// for (let i = 0; i < array.length - 1; i++) {
//     newArray[i] = array[i]
// }

// array = newArray
// return array