var arrayOfNumbers = [0, 1, 2, 3];
var animals = ['dog', 'cat', 'elephant']


describe('pop', function() {
    test('Array of numbers', function() {
        check(pop(arrayOfNumbers), 3)
        check(arrayOfNumbers.length, 3)
        check(arrayOfNumbers[0], 0)
        check(arrayOfNumbers[1], 1)
        check(arrayOfNumbers[2], 2)
        check(arrayOfNumbers[3], undefined)
    })
    test('Array of strings', function() {
        check(pop(animals), 'elephant')
        check(animals.length, 2)
        check(animals[0], 'dog')
        check(animals[1], 'cat')
        check(animals[2], undefined)
    })
    test('Empty array', function() {
        const array = []
        const length = array.length;

        const result = pop(array);

        check(result, undefined)
        check(array.length, length)
    })
})
