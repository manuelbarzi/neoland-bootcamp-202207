describe('popFunction', function (){
    test('arrayOfNumbers', function (){
        const arrayOfNumbers = [0, 1, 2, 3]
        check(pop(arrayOfNumbers), 3)
        check(arrayOfNumbers[0], 0)
        check(arrayOfNumbers[1], 1)
        check(arrayOfNumbers[2], 2)
        check(arrayOfNumbers[3], undefined)
    })
    
    test('arrayOfanimals', function () {
        const animals = ['dog', 'cat', 'elephant']
        check(pop(animals), 'elephant')
        check(animals[0], 'dog')
        check(animals[1], 'cat')
        check(animals[2], undefined)
    })
    
})