describe('sort', function() {
    test('array of strings', function() {
        const array = ["Banana", "Orange", "Apple", "Mango"];
        const result = sort(array);

        check(result.length, array.length)
        check(result[0], 'Apple')
        check(result[1], 'Banana')
        check(result[2], 'Mango')
        check(result[3], 'Orange')
    })

    test('array of numbers', function() {
        const array = [12, 1, 2, 23];
        const result = sort(array);

        check(result.length, array.length)
        check(result[0], 1)
        check(result[1], 12)
        check(result[2], 2)
        check(result[3], 23)
    })

    test('array of strings with numbers', function() {
        const array = ['word', 'Word', '1 Word', '2 Words'];
        const result = sort(array);

        check(result.length, array.length)
        check(result[0], '1 Word')
        check(result[1], '2 Words')
        check(result[2], 'Word')
        check(result[3], 'word')
    })

    test('array of numbers with compareFunction', function() {
        const array = [12, 1, 2, 23];
        const result = sort(array, function (a, b) { return a - b });

        check(result.length, array.length)
        check(result[0], 1)
        check(result[1], 2)
        check(result[2], 12)
        check(result[3], 23)
    })

    test('array of numbers with compareFunction', function() {
        const array = [12, 1, 2, 23];
        const result = sort(array, function (a, b) { return b - a });

        check(result.length, array.length)
        check(result[0], 23)
        check(result[1], 12)
        check(result[2], 2)
        check(result[3], 1)
    })
})



