describe('TESTING filter array',function(){
    test('Filter an number array',function(){

        arrayResult = (filter(checkAge, arrayOfNumbers))
        
        check(arrayResult[0],28)
        check(arrayResult[1],25)
        check(arrayResult[2],64)
        check(arrayResult[3],19)
    })
})
