

function push(array, element) {
    // TODO
    let arrayLength = 0

    for(let i = 1; i < arguments.length; i++){
        array.length++
        array[(array.length-1)] = arguments[i]
    }

    for(let j = 0; j < array.length; j++){
        arrayLength++
        }
   
    return arrayLength
   

}

var numbers = [0, 1, 2, 3]

console.log(push(numbers, 7))
// expected output: 5

console.log(numbers)
// expected output: [0, 1, 2, 3, 7]

var animals = ['cat', 'dog', 'elephant']

console.log(push(animals, 'monkey', 'frog'))
// expected output: 5

console.log(animals)
// expected output: ['cat', 'dog', 'elephant', 'monkey', 'frog']