describe('pop', function () {
    test('first example', function () {
        const array = [0, 1, 2, 3]
        const result = pop(array)
        
        check(result, 3)
        check(array[0], 0)
        check(array[1], 1)
        check(array[2], 2)
        check(array[3], undefined)
    })


    test('second example', function () {
        const array = ['dog', 'cat', 'elephant']
        const result = pop(array)

        check(result, "elephant")
        check(array[0],'dog')
        check(array[1],'cat')
        check(array[2],undefined)
    })
})