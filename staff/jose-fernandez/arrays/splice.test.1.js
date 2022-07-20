describe('splice',()=>{
    test('insert at index', () => {
        const months = ['Jan', 'Mar', 'Apr', 'May']

       // const result = months.splice(1, 0, 'Feb');
         const result = splice(months,1, 0, 'Feb');

        check(result instanceof Array, true)
        check(result.length, 0)

        check(months.length, 5)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Mar')
        check(months[3], 'Apr')
        check(months[4], 'May')
    })

    test('replace elements', () => {
        const months = ['Jan','Feb', 'Mar', 'Apr','Jun','Jun' ,'Jun','Jul']

        
        const result = splice(months,4, 2, 'May');

        check(result instanceof Array, true)
        check(result.length, 2)
        check(result[0], 'Jun')
        check(result[1], 'Jun')

        check(months.length, 7)
        check(months[0], 'Jan')
        check(months[1], 'Feb')
        check(months[2], 'Mar')
        check(months[3], 'Apr')
        check(months[4], 'May')
    })

    test('remove  1 elements at index', () => {
        const fish = ['angel','clown', 'drum', 'mandarin','sturgeon']

        const remove = splice(fish,1, 1);

        check(remove instanceof Array, true)
        check(remove.length, 1)
        check(remove[0], 'clown')

        check(fish.length, 4)
        check(fish[0], 'angel')
        check(fish[1], 'drum')
        check(fish[2], 'mandarin')
        check(fish[3], 'sturgeon')
        
    })

    test('remove 2 elements at index', () => {
        const fish = ['angel','clown', 'drum', 'mandarin','sturgeon']

        const remove = splice(fish,4, 2);

        check(remove instanceof Array, true)
        check(remove.length, 1)
        check(remove[0], 'sturgeon')

        check(fish.length, 4)
        check(fish[0], 'angel')
        check(fish[1], 'clown')
        check(fish[2], 'drum')
        check(fish[3], 'mandarin')
        
    })

    test('remove elements at index', () => {
        const fish = ['angel','clown', 'drum', 'mandarin','sturgeon']

        const remove = splice(fish,3, 1);

        check(remove instanceof Array, true)
        check(remove.length, 1)
        check(remove[0], 'mandarin')

        check(fish.length, 4)
        check(fish[0], 'angel')
        check(fish[1], 'clown')
        check(fish[2], 'drum')
        check(fish[3], 'sturgeon')
        
    })

})

