// function join(array, separator) {
//     var newString = '';
//     for (var i = 0; i < array.length; i++) {        
//         if (i === array.length - 1) {
//             newString += array[i];
//             return newString;
//         }
//         newString += array[i] + separator;
//     }
//     return newString;
// }

function join(array, separator = ',') { // valor por defecto de separator si no se envía = ","
    let result = '';

    for (let i = 0; i < array.length; i++) {
        var element = array[i];

        result += element;

        if (i < array.length - 1) {
            result += separator;
        }
    }
    return result;
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