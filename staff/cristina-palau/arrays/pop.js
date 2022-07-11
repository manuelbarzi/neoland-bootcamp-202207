/*function pop(array) {
    console.log(array.pop())}
    delete array[array.length - 1]*/

function pop(array) {
    let lastElement = array[array.length - 1]
    array.length = array.length - 1    
    return lastElement
}


// let newArray = []
// for (let i = 0; i < array.length - 1; i++) {
//     newArray[i] = array[i]
// }

// array = newArray
// return array