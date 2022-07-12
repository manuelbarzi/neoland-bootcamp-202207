describe('push', function() {
    test('pushes 2 animals', function() {
        const animals = ['cat', 'dog', 'elephant']
        const length = animals.length;

        const count = push(animals, 'monkey', 'frog')

        check(count, length + 2)
        check(animals.length, length + 2)
        check(animals[animals.length - 1], 'frog')
        check(animals[0], 'cat')
        check(animals[1], 'dog')
        check(animals[2], 'elephant')
    })

    test('pushes number', function() {
        const numbers = [0, 1, 2, 3]
        const length = numbers.length;

        const count = push(numbers, 7);

        check(count, length + 1)
        check(numbers.length, length + 1)
        check(numbers[numbers.length - 1], 7)
        check(numbers[0], 0)
        check(numbers[1], 1)
        check(numbers[2], 2)
        check(numbers[3], 3)
    })
})



