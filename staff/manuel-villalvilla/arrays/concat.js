function concat(array, array2) {
    var newArray = [];
    // var x = 0;
    for (var i = 0; i < arguments.length; i++) {
        for (var j = 0; j < arguments[i].length; j++) { 
            newArray[newArray.length] = arguments[i][j];
            // x++;
        }
    }
    return newArray;
}
