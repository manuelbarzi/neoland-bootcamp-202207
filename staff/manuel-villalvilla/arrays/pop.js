function pop(array) {
    var x = array[array.length - 1];  
    if (array.length > 0) {
        array.length = array.length - 1; // !! Se puede reducir el tamaño del array reduciendo su length
    }
    return x; 
}
