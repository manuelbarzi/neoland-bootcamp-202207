function push(array, element) {
    var result = []
    // array[array.length] = element
    for (let i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }
    result = array.length
    return result
}


var numbers = [0, 1, 2, 3]

console.log(numbers)

console.log(push(numbers, 7))
// expected output: 5

console.log(numbers)
// expected output: [0, 1, 2, 3, 7]

var animals = ['cat', 'dog', 'elephant']

console.log(animals)

console.log(push(animals, 'monkey', 'frog'))
// expected output: 5

console.log(animals)
// expected output: ['cat', 'dog', 'elephant', 'monkey', 'frog']

