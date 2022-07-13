function includes(array, value){
    let result = ""
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            result = true
            break;
        }else{
            result = false
        }
    }
    return result
}
