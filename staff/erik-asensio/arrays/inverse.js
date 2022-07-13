
function inverse(array){
    const result = []

    for (let i = array.length; i > 0; i--){
        result[array.length-i] = array[i-1]
    }
    return result
}