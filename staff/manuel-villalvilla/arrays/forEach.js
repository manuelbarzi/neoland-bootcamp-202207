function forEach (array, functionforEach) {
    for (var i = 0; i < array.length; i++) {
        functionforEach(array[i]);
    }
    return undefined;
}

