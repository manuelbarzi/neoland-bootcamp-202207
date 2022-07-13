
function reverse(array){
    const result = []

    for (let i = array.length; i > 0; i--){
        array[array.length-i] = array[i-1]
    }

    for (let i = 0; i < array.length; i++){
        array[i] = array[array.length - 1 - i]
    }

    return result
}