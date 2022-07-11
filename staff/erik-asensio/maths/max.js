

function max(a, b) {
    // if (a > b){
    //     return(a)
    // }else if (a < b){
    //     return(b)
    // }
    var maxValue = arguments[0]
    for (i = 0; i < arguments.length; i++){
       if (maxValue < arguments[i]){
        maxValue = arguments[i]
        
       }
    }
    return maxValue
}

// tests

console.log(max(4, 1))
// 4

console.log(max(123, 456))
// 456

console.log(max(1, 2, 3, 0, 4, 5))
// 5

