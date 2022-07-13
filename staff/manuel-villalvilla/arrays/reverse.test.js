describe('reverse', function() {
    test('reverse odd with numbers', function() {
        const array = [1, 2, 3, 4, 5, 6, 7];
        const result = reverse(array);

        check(result, array);
        check(result.length, array.length);
        check(result[0], 7); // no puedo poner array[x] porque ha mutado
        check(result[1], 6);
        check(result[2], 5);
        check(result[3], 4);
        check(result[4], 3);
        check(result[5], 2);
        check(result[6], 1);
    })

    test('reverse even with numbers', function() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8];
        const result = reverse(array);

        check(result, array);
        check(result.length, array.length);
        check(result[0], 8); // no puedo poner array[x] porque ha mutado
        check(result[1], 7);
        check(result[2], 6);
        check(result[3], 5);
        check(result[4], 4);
        check(result[5], 3);
        check(result[6], 2);
        check(result[7], 1);
    })

    test('reverse even with numbers', function() {
        const array = ['a', 'b', 'c', 'd', 'e'];
        const result = reverse(array);

        check(result, array);
        check(result.length, array.length);
        check(result[0], 'e'); // no puedo poner array[x] porque ha mutado
        check(result[1], 'd');
        check(result[2], 'c');
        check(result[3], 'b');
        check(result[4], 'a');
    })
})
