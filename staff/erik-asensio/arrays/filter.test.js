describe("filter", function(){

    test("more than 6 chars elements", function(){
        const array = ["chair", "elephant", "house", "banana", "aurelio"]
        function moreThanSix(element){
            if (element.length > 6){
                return element
            }else{
                return undefined
            }
        }
        const result = filter(array, moreThanSix)

        check(result.length, 2)
        check(result[0], array[1])
        check(result[1], array[4])
    })

    test("there are not any element with more than 30 chars", function(){
        const array = ["chair", "elephant", "house", "banana", "aurelio"]
        function moreThanThirty(element){
            if (element.length > 30){
                return element
            }else{
                return undefined
            }
        }
        const result = filter(array, moreThanThirty)

        check(result.length, 0)
        check(result[0], undefined)
    })
})