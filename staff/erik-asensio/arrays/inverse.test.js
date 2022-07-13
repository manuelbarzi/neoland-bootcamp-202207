describe("reverse", function (){
    
    test("array with numbers", function(){
        const array=[1, 2, 3, 4]
        const result= reverse(array)

        check(result[0],array[3])
        check(result[1],array[2])
        check(result[2],array[1])
        check(result[3],array[0])
        
    })

    test("array with strings", function(){
        const array=["elephant", "frog", "cat", "dog"]
        const result= reverse(array)
        
        check(result[0],array[3])
        check(result[1],array[2])
        check(result[2],array[1])
        check(result[3],array[0])
        
    })
})