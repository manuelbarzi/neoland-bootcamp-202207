describe('TESTING Sort in arrays', function(){
    test('Sort 1 array of numbers by default(UNICODE)', function(){
        
        array = sort([2, 10, 4, 7, 50,1])
        //[10, 2, 4, 50, 7]
        check(array[0],'1')
        check(array[1],'10')
        check(array[2],'2')
        check(array[3],'4')
        check(array[4],'50')
        check(array[5],'7')
    })

    test('Sort 1 array of strings by default(UNICODE)', function(){
        array = sort(['yellow', 'Hola', 'Probando', 'hola','World'])
        //['Hola', 'Probando', 'World', 'hola', 'yellow']
        check(array[0], 'Hola')
        check(array[1], 'Probando')
        check(array[2], 'World')
        check(array[3], 'hola')
        check(array[4], 'yellow')

    })
})