function pop(array) {
    var x = array[array.length - 1];  
    if (array.length > 0) { // esto es lo mismo que poner if (array.length). Porque todos los numeros distintos de 0 en js son true
        array.length = array.length - 1; // !! Se puede reducir el tamaño del array reduciendo su length
    }
    return x; 
}
