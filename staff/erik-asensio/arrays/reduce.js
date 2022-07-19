function reduce(array, initialValue, callback) {
    let result = ""
    for (let i = 0; i < array.length; i++) {
        
        result = callback(initialValue, array[i])
        initialValue = result
    }
    return result
}