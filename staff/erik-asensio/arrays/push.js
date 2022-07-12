function push(array, element) {
    var result = []
    // array[array.length] = element
    for (let i = 1; i < arguments.length; i++) {
        array[array.length] = arguments[i]
    }
    result = array.length
    return result
}