function forEach (array, functionforEach) {
    if (typeof functionforEach !== 'function') {
        throw new TypeError (functionforEach + ' is not a function'); // error de tipado
    }
    for (var i = 0; i < array.length; i++) {
        functionforEach(array[i]);
    }
    return undefined;
}

