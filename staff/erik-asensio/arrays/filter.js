function filter(array, callback){
    const result = new Array
    for (let i = 0; i < array.length; i++){
        callback(array[i])
        if (callback(array[i])){
            result[result.length] = array[i]
        }
    }
    return result
}