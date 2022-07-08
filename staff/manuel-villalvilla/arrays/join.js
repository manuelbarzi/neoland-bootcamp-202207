function join(array, separator) {
    var newString = '';
    for (var i = 0; i < array.length; i++) {        
        if (i === array.length - 1) {
            newString += array[i];
            return newString;
        }
        newString += array[i] + separator;
    }
    return newString;
}

// tests;

console.log(join(['Fire', 'Air', 'Water'],' '));
// Fire Air Water

console.log(join(['Fire', 'Air', 'Water'],''));
// FireAirWater

console.log(join(['Fire', 'Air', 'Water'],'-'));
// Fire-Air-Water

console.log(join(['Fire', 'Air', 'Water'],','));
// Fire,Air,Water