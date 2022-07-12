function includes(array, element){
    let result = ""

    for (let i = 0; i < array.length; i++){
        if (array[i] === element){
            result = true
            break;
        }else{
            result = false
        }
    }
    return result
}
