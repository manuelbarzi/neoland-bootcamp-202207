function concat(array, array2) {
    var result=[]
    for (i = 0; i < arguments.length; i++){
        var argument = arguments[i]

        for(j=0; j < argument.length; j++){
            var element=argument[j]
            result.push(element)
        }
    }
    return result
}


// tests

console.log(concat([1, 2], [3, 4, 5]))
// [1, 2, 3, 4, 5]

console.log(concat(['h', 'o', 'l', 'a'], ['m', 'u', 'n', 'd', 'o']))
// ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log(concat([1, 2], [3, 4], [5, 6]))
// [1, 2, 3, 4, 5, 6]