describe("forEach", function() {
    
    test("iterate numbers", function() {
        const nums = [1, 2, 3]
        const result = []

        forEach(nums, function(num) {

            //result.push(num)
            result[result.length] = num
        })

        check(result.length, nums.length)
        check(result[0], nums[0])
        check(result[1], nums[1])
        check(result[2], nums[2])
    })

    test("iterate strings", function() {
        const string = ["hola", "mundo", "yupi"]
        result = ""

        const concatenate = function(string){
            result += string
        }

        forEach(string, concatenate)
        check(result.length, string[0].length + string[1].length + string[2].length)
        check(result, string[0] + string[1] + string[2])
    })
})
