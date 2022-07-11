describe('TESTING forEach in arrays', function(){
    test('Addition from all elements in an array', function(){
        check(forEach(sumar, arrayOfNumbers), 253)
    })
})