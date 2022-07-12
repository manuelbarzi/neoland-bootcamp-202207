
describe("Join", function(){

    test("join with space", function(){
        const array = ['Fire', 'Air', 'Water']
        const separator =  " "
        const result = join(array, separator)

        check(result, array[0] + separator + array[1] + separator + array[2])
    })

    test("join without separator", function(){
        const array = ['Fire', 'Air', 'Water']
        const separator =  ""
        const result = join(array, separator)

        check(result, array[0] + separator + array[1] + separator + array[2])
    })

    test("join with dash", function(){
        const array = ['Fire', 'Air', 'Water']
        const separator =  "-"
        const result = join(array, separator)

        check(result, array[0] + separator + array[1] + separator + array[2])
    })

    test("join with default separator", function(){
        const array = ['Fire', 'Air', 'Water']
        const separator =  ","
        const result = join(array)

        check(result, array[0] + separator + array[1] + separator + array[2])
    })
})

