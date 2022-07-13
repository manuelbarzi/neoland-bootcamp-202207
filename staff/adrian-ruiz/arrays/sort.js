function sort(array){

    var newArray = [];
    let newString = ''
    let datoTemporal = ''
    // CONVERTIMOS LOS ELEMENTOS DEL ARRAY EN STRINGS
    for(let i = 0; i < array.length; i++){
        newString = ""+array[i]+""
        newArray[i] = newString 
    }

    for(let i = 0; i < newArray.length; i++){
        for(let j = 0; j < newArray.length -1; j++){  
            if(newArray[i] < newArray[j]){
                datoTemporal = newArray[j]
                newArray[j] = newArray[i]
                newArray[i] = datoTemporal
            }
        }
        
    }
    return newArray

    
}