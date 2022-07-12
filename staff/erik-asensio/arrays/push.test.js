describe('push', function () {
    test('pushes numbers', function () {
        const array = [0, 1, 2, 3]
        const element = 7
        const result = push(array,element)

        check(result, array.length)
        check(result, 5)
        check(array[0], 0)
        check(array[1], 1)
        check(array[2], 2)
        check(array[3], 3)
        check(array[4], 7)
    })


    test('pushes animals', function () {
        const array = ['cat', 'dog', 'elephant']
        const element = 'monkey'
        const argument2 = 'frog'
        const result = push(array,element,argument2)

        check(result, array.length)
        check(result, 5)
        check(array[0], 'cat')
        check(array[1], 'dog')
        check(array[2], 'elephant')
        check(array[3], 'monkey')
        check(array[4], 'frog')
    })
})