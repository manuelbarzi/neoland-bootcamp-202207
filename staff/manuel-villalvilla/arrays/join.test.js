describe('join', function() {
    test('3 words 1 separator', function() {
        check(join(['Fire', 'Air', 'Water'],' '), 'Fire Air Water');
    })
    test('3 words empty separator', function() {
        check(join(['Fire', 'Air', 'Water'], ''), 'FireAirWater');
    })
    test('4 words 1 separator', function() {
        check(join(['Fire', 'Air', 'Water', 'Sand'], '-'), 'Fire-Air-Water-Sand')
    })
    test('3 words no separator', function() {
        check(join(['Fire', 'Air', 'Water']), 'Fire,Air,Water')
    })
})
