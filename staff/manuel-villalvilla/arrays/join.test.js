describe('join', function() {
    test('3 words 1 separator', function() {
        check(join(['Fire', 'Air', 'Water'],' '), 'Fire Air Water');
    })
    test('3 words empty separator', function() {
        const elements = ['Fire', 'Air', 'Water'];
        const separator = '';

        const result = join(elements, separator);

        check(result, elements[0] + separator + elements[1] + separator + elements[2])
    })
    test('4 words 1 separator', function() {
        check(join(['Fire', 'Air', 'Water', 'Sand'], '-'), 'Fire-Air-Water-Sand')
    })
    test('3 words no separator', function() {
        check(join(['Fire', 'Air', 'Water']), 'Fire,Air,Water')
    })
})
