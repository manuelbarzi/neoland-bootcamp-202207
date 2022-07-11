function push(array, element) {
    for (let i = 1; i < push.arguments.length; i++) {
        array[array.length] = push.arguments[i]      
    }
    return array.length
    
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


// let newArray = array

// for (let i = 0; i < push.arguments.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         if (array[j] === array.length - 1)
//         newArray = array + element

//         array = newArray
//         return newArray
//     }
// }