function slice(array, start, end){
    const newArray = []
    if(!end && (start > 0)){
        var x = 0;
        for(let i = start; i < array.length ; i++){
            newArray[x] = array[i]
            x++
        }     
    }
    else if(!end && (start < 0)){
        // TODO
        var x = 0;
        for(let i = (array.length + start); i < array.length; i++){
            newArray[x] = array[i]
            x++
        }
    }
    else if((start > 0) && (end > 0)){
        var x = 0;
        for(let i = start; i < end ; i++){
            newArray[x] = array[i]
            x++
        }     
    }
    else if (start > 0 && (end < 0)){
        //TODO
        var x= 0
        for(let i = start; i < (array.length + end); i++){
            newArray[x] = array[i]
            x++
        }
    }
    else if (!start && !end){
        var x = 0;
        for(let i = 0; i < array.length; i++){
            newArray[x] = array[i]
            x++
        }
    }
    // COMPROBAMOS CASOS DE ERROR Y DEVOLVEMOS EL ERROR DEL MENSAJE
    try{
        if(!(array instanceof Array)) {
            throw new Error (`${array} is not an ARRAY`);
        }
        else if(!(arguments > 3)) {
            throw new Error ('error, args EXCEEDED (min 1, max 3 args)');
        }

    }
    catch(err){
        return err.message
    }
    

    return newArray
}