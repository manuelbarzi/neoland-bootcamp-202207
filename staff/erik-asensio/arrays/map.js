function map(array, callback){
    const result = []

    for (let i = 0; i < array.length; i++){
        result[i] = callback(array[i])
    }
    return result
}

