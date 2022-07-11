function join(array, separator) {
    var frase
    for (i =0; i < array.length; i++){
        frase = array[i]
        console.log(frase + arguments[1])
    }
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