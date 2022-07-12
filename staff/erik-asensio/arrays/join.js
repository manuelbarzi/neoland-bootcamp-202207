function join(array, separator=",") {
    var result=""
    for (i =0; i < array.length; i++){
        var element = array[i]
        result += element //(+=) --> result = result + element

        if(i<array.length-1){
            result += separator
        }
    }
    return result
}