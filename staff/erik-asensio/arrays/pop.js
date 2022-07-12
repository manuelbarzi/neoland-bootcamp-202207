function pop(array) {
    var result = array[array.length-1]
    if (array.length > 0){
        array.length -= 1

        return result
    }
    
    return result
}
