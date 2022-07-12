function push(array, ...elements) { // rest operator. guarda todos los elementos pasados como parametros en un array
    
    for (var i = 0; i < elements.length; i++) {
        array[array.length] = elements[i];
        
    }
    return array.length;
}