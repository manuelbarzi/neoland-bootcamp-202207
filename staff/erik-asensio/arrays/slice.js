function slice(array, inicio, final){
    let sliced = []

    if(inicio == undefined && final == undefined){
        for(let i = 0; i < array.length; i++){
            sliced[sliced.length] = array[i]
        }
        return sliced
    }

    if(final < 0){
        final = array.length + final
    }else if(final == undefined){
        final = array.length
    }
    if(inicio < 0){
        inicio = array.length + inicio
    }

    for(let i = inicio; i < final; i++){
        sliced[sliced.length] = array[i]
    }

    return sliced
}
