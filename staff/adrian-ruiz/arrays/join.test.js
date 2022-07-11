describe('Test Join', function(){
    test('One array with a separator', function(){

        check(join(['Fire', 'Air', 'Water'],' '),'Fire Air Water')
        check(join(['Fire', 'Air', 'Water'],''),'FireAirWater')
        check(join(['Fire', 'Air', 'Water'],'-'),'Fire-Air-Water')
        check(join(['Fire', 'Air', 'Water']),'Fire,Air,Water')
    })
})