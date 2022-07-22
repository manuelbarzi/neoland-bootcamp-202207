describe('reverse', function() {
    test('reverse odd bunch of numbers', function() {
        const numbers = [1, 2, 3, 4, 5, 6, 7]
        const result = reverse(numbers)

        check(result, numbers)
        check(result.length, 7)
        check(result[0], 7)
        check(result[1], 6)
        check(result[2], 5)
        check(result[3], 4)
        check(result[4], 3)
        check(result[5], 2)
        check(result[6], 1)
    })

    test('reverse even bunch of numbers', function() {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
        const result = reverse(numbers)

        check(result, numbers)
        check(result.length, 8)
        check(result[0], 8)
        check(result[1], 7)
        check(result[2], 6)
        check(result[3], 5)
        check(result[4], 4)
        check(result[5], 3)
        check(result[6], 2)
        check(result[7], 1)
    })

    test('reverse odd bunch of characters', function() {
        const chars = ['a', 'b', 'c', 'd', 'e']
        const result = reverse(chars)

        check(result, chars)
        check(result.length, 5)
        check(result[0], 'e')
        check(result[1], 'd')
        check(result[2], 'c')
        check(result[3], 'b')
        check(result[4], 'a')
    })

    test('reverse even bunch of characters', function() {
        const chars = ['a', 'b', 'c', 'd', 'e', 'f']
        const result = reverse(chars)

        check(result, chars)
        check(result.length, 6)
        check(result[0], 'f')
        check(result[1], 'e')
        check(result[2], 'd')
        check(result[3], 'c')
        check(result[4], 'b')
        check(result[5], 'a')
    })
})