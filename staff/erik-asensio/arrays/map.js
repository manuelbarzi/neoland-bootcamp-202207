function map(array, callback){
    const result = []

    for (let i = 0; i < array.length; i++){
        result[i] = callback(array[i])
    }
    return result
}

console.log(map([1, 4, 9], function(num) { return num * 2 }))


// describe("map", function(){

//     test("doble", function(){
//         const array = [1, 4, 9]
//         callback = function(num) {
//                 return num * 2
//         }
//         const result = map(array, callback)

//         check(result, [[array[0] * 2 ], [ array[1] * 2], [ array[2] * 2]])
//     })

//     test("raices", function(){
//         const array = [1, 4, 9]
//         callback = function(){

//         }
//         const result = map(array, callback)

//         check(result, [[Math.sqrt(array[0])], [Math.sqrt(array[1])], [Math.sqrt(array[2])]])
//     })
// })

