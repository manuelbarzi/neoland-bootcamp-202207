describe("reduce", function(){

    test("suma de los elementos", function(){
        const array=[1, 2, 3, 4]
        function sumaTotal(element){
            let result = element[0]
            for(let i = 1; i < array.length; i++){
                result += element[i]
            }
            return result
        }
        const result = reduce(array, sumaTotal)

        check(result, 10)
        check(typeof result, "number")
    })

    test("multiplicacion de los elementos", function(){
        
        const array=[1, 2, 3, 4]
        function multiTotal(element){
            let result = element[0]
            for(let i = 1; i < array.length; i++){
                result *= element[i]
            }
            return result
        }
        const result = reduce(array, multiTotal)

        check(result, 24)
        check(typeof result, "number")
    })

    test("resta de los elementos", function(){
        
        const array=[1, 2, 3, 4]
        function multiTotal(element){
            let result = element[0]
            for(let i = 1; i < array.length; i++){
                result -= element[i]
            }
            return result
        }
        const result = reduce(array, multiTotal)

        check(result, -8)
        check(typeof result, "number")
    })
})
