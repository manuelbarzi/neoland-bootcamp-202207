describe("find", function () {

    test("mayor de 10", function () {
        const array = [1, 2, 10, 18, 23]
        const result = find(array, callback)
        function callback(element) {
            return element > 10
        }

        check(result, array[3])
    })

    test("no hay element en el array", function () {
        const array = [1, 2, 10, 18, 23]
        const result = find(array, callback)
        function callback(element) {
            return element > 220
        }

        check(result, undefined)
    })
})