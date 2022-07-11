function join(array, separator) {
    // TODO ...
    let newText = ""
    if(separator === undefined)
        separator = ","
    for(let i = 0; i < array.length; i++){
        if(i === array.length -1){
            newText = newText + array[i]
        }else
        newText = newText + array[i] + separator

    }
    return newText
}

// tests;

console.log(join(['Fire', 'Air', 'Water'],' '));
// Fire Air Water

console.log(join(['Fire', 'Air', 'Water'],''));
// FireAirWater

console.log(join(['Fire', 'Air', 'Water'],'-'));
// Fire-Air-Water

console.log(join(['Fire', 'Air', 'Water']));
// Fire,Air,Water
/*
describe('Test Join', function(){
    test('One array with a separator', function(){

        check(join(['Fire', 'Air', 'Water'],' '),'Fire Air Water')
    })
})
*/
