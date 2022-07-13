function map(mapFunction, array) {
    if (array.length > 0) {
        var newArray = [];
        for (var i = 0; i < array.length; i++) {
            newArray[i] = mapFunction(array[i]);
        }
        return newArray;
    }
}