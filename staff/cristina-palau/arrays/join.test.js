describe('joinFunction', function () {
    test('espace', function () {
        check(join(['Fire', 'Air', 'Water'], ' '), 'Fire Air Water');
    })
    test('no-espace', function () {
        check(join(['Fire', 'Air', 'Water'], ''), 'FireAirWater');
    })
    test('minus', function () {
        check(join(['Fire', 'Air', 'Water'], '-'), 'Fire-Air-Water');
    })
    test('comma', function () {
        check(join(['Fire', 'Air', 'Water'],), 'Fire,Air,Water');
    })   
})