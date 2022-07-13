function reverse (array) {
    if (Array.isArray(array)) {
        // añado math floor para redondear hacia abajo la division y evitar que el elemento del medio haga el bucle for
        const limit = Math.floor(array.length / 2);
        for (let i = 0; i < limit; i++) {
            const temp = array[i];
            const rearIndex = array.length - i - 1;
            array[i] = array[rearIndex];
            array[rearIndex] = temp;
        }
        return array;
    }
}