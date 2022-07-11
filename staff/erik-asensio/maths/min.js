
function min(a, b) {

    var minValue = arguments[0]
    for (i = 0; i < arguments.length; i++){
       if (minValue > arguments[i]){
        minValue = arguments[i]
        
       }
    }
    return minValue
}

// tests

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5)) // TODO learn about "js arguments"
// 0