describe('flat', function() {
    test('dimensional array without depth', function() {
        const array = [0, 1, 2, [[3, 4]]];
        const result = flat(array);

        // check(result.length, array.length); --> No se puede chequear porque el result.length varía
        check(result[0], array[0]);
        check(result[1], array[1]);
        check(result[2], array[2]);
        check(result[3], array[3][0]);
    })

    test('dimensional array without depth', function() {
        const array = [0, 1, 2, [3, 4]];
        const result = flat(array);

        check(result[0], array[0]);
        check(result[1], array[1]);
        check(result[2], array[2]);
        check(result[3], array[3][0]);
        check(result[4], array[3][1]);
    })

    test('dimensional array without depth', function() {
        const array = [[0, 1], 2, [[3, 4]], 5, 6, [[[7, 8]]]];
        const result = flat(array);

        check(result[0], array[0][0]);
        check(result[1], array[0][1]);
        check(result[2], array[1]);
        check(result[3], array[2][0]);
        check(result[4], array[3]);
        check(result[5], array[4]);
        check(result[4], array[3]);
        check(result[5], array[4]);
        check(result[6][0], array[5][0][0]);
    })

    test('dimensional array with depth', function() {
        const array = [0, 1, 2, [[[3, 4]]]];
        const result = flat(array, 2);

        check(result[0], array[0]);
        check(result[1], array[1]);
        check(result[2], array[2]);
        check(result[3], array[3][0][0]);
    })

    test('dimensional array with depth', function() {
        const array = [0, 1, 2, [[[3, 4]]]];
        const result = flat(array, 3);

        check(result[0], array[0]);
        check(result[1], array[1]);
        check(result[2], array[2]);
        check(result[3], array[3][0][0][0]);
        check(result[4], array[3][0][0][1]);
    })

    test('dimensional array with depth', function() {
        const array = [0, [[1, 2]], [[[3, 4]]]];
        const result = flat(array, 1);

        check(result[0], array[0]);
        check(result[1], array[1][0]);
        check(result[2], array[2][0]);
    })

    test('dimensional array with depth', function() {
        const array = [0, [[1, 2]], [[[3, 4]]]];
        const result = flat(array, 10);

        check(result[0], array[0]);
        check(result[1], array[1][0][0]);
        check(result[2], array[1][0][1]);
        check(result[3], array[2][0][0][0]);
        check(result[4], array[2][0][0][1]);
    })
})
