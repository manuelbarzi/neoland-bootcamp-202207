describe('at', function () {
    test('first example', function () {
        const array = ['cat', 'dog', 'elephant']
        const ubi = 2
        const result = at(array,ubi)
        
        check(result, "elephant")
    })


    test('second example', function () {
        const array = ['Adiós', 1, 'Mundo']
        const ubi = 0
        const result = at(array,ubi)

        check(result, "Adiós")
    })
})