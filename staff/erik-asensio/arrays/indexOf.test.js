describe('indexOf', function () {
    test('first example', function () {
        const array = ['dog', 'cat', 'elephant', 'monkey']
        const value = 'monkey'
        const result = indexOf(array, value)
        
        check(result, 3)
    })


    test('second example', function () {
        const array = ['hello', 'world', 'bye', 'mars']
        const value = 'hello'
        const result = indexOf(array, value)

        check(result, 0)
    })
})