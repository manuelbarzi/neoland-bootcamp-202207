function indexOf(array, value) {
    let result = ""

    for(let i = 0; i < array.length; i++){
        if(array[i]===value){
            result = i
            break;
        }
    }
    return result
}
