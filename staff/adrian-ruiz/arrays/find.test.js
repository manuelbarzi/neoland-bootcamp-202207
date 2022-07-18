describe('TESTING find in Arrays', function(){
    test('Return element bigger than 10', function(){
        
        const array = [5, 12, 8, 130, 44]
        const result = find(array, function(element){
            return element > 10
        })

        check(result,12)
    })

    test('Find object in array with specific property', function(){

        const inventario = [
            {nombre: 'manzanas', cantidad: 2},
            {nombre: 'bananas', cantidad: 0},
            {nombre: 'cerezas', cantidad: 5}
        ]

        function esCereza(fruta) {
            return fruta.nombre === 'cerezas';
        }
        const result = find(inventario, esCereza)
        check(result, inventario[2])
    })

    test('Element does not exists -> Should return UNDEFINED', function(){
        const array = [5, 12, 8, 130, 44]

        const result = find(array, function(element){
            return element > 150
        })
        check(result,undefined)
    })

    test('Find in array with empty indexes', function(){
        const array = [5,,,130, 44]
        const result = find(array, function(element){
            return element > 10
        })

        check(result, 130)
    })

    test('Find in array with null and undefined elements',function(){
        const array = [5,null,undefined,130, 44]

        const result = find(array, function(element){
            return element > 10
        })

        check(result, 130)
    })

    test('Find in array with element deleted by callback function',function(){
        
        const array = [5,null,undefined,130, 44]
        const result = find(array, function(element){
            delete array[3]
            return element > 10
        })

        check(result[3],undefined)
        check(result,44)

    })
})