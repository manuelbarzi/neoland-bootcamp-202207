function concat(array, array2) {
    var result=[]
    for (i = 0; i < arguments.length; i++){
        var argument = arguments[i]

        for(j=0; j < argument.length; j++){
            var element=argument[j]
            result.push(element)
        }
    }
    return result
}