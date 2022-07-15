describe("slice", function(){

    test("todo positivo",function(){
        const array = [1, 2, 3, 4]
        const inicio = 0
        const final = 2
        const result = slice(array, inicio, final)

        check(result[0], array[0])
        check(result[1], array[1])
        check(result.length, 2) 
        })

        test("final negativo",function(){
            const array = [1, 2, 3, 4]
            const inicio = 0
            const final = -2
            const result = slice(array, inicio, final)
    
            check(result[0], array[0])
            check(result[1], array[1])
            check(result.length, 2) 
            })

            test("inicio negativo",function(){
                const array = [1, 2, 3, 4]
                const inicio = -2
                const final = 3
                const result = slice(array, inicio, final)
        
                check(result[0], array[2])
                check(result.length, 1) 
                })

        test("inicio negativo sin final",function(){
            const array = [1, 2, 3, 4]
            const inicio = -2
            const result = slice(array, inicio,)
    
            check(result[0], array[2])
            check(result[1], array[3])
            check(result.length, 2) 
            })

        test("sin final",function(){
            const array = [1, 2, 3, 4]
            const inicio = 2
            const result = slice(array, inicio)
    
            check(result[0], array[2])
            check(result[1], array[3])
            check(result.length, 2) 
            })

        test("final negativo, inicio negativo",function(){
            const array = [1, 2, 3, 4]
            const inicio = -3
            const final = -2
            const result = slice(array, inicio, final)
            
            check(result[0], array[1])
            check(result.length, 1) 
            })

        test("inicio negativo sin final",function(){
            const array = [1, 2, 3, 4]
            const inicio = -2
            const result = slice(array, inicio)
    
            check(result[0], array[2])
            check(result[1], array[3])
            check(result.length, 2) 
            })

        test("sin inicio ni final",function(){
            const array = [1, 2, 3, 4]
            const result = slice(array)
    
            check(result[0], array[0])
            check(result[1], array[1])
            check(result[2], array[2])
            check(result[3], array[3])
            check(result.length, array.length) 
        })
    })