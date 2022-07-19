describe("reduce", function(){

    test("suma de los elementos", function(){
        
        const array = [1, 2, 3, 4]
        const initialValue = 0
        function sumaTotal(initialValue, element){
            
            let result = initialValue + element

            return result
        }
        const result = reduce(array, initialValue, sumaTotal)

        check(result, 10)
        check(typeof result, "number")
    })

    test("multiplicacion de los elementos", function(){
        
        const array=[1, 2, 3, 4]
        const initialValue = 1
        function multiTotal(initialValue, element){
            
            let result = initialValue * element
            
            return result
        }
        const result = reduce(array, initialValue, multiTotal)

        check(result, 24)
        check(typeof result, "number")
    })

    test("resta de los elementos", function(){
        
        const array=[1, 2, 3, 4]
        const initialValue = 2
        function multiTotal(initialValue, element){
            
            let result = initialValue - element
            return result
        }
        const result = reduce(array, initialValue, multiTotal)

        check(result, -8)
        check(typeof result, "number")
    })
})
