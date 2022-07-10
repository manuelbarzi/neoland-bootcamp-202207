function filter(filterFunction, array) {
    var newArray = [];
    var x = 0;
    for (var i = 0; i < array.length; i++) {
        if (filterFunction(array[i])) {
            newArray[x] = array[i];
            x++
        }
    }
    return newArray;
}

var arrayOfNumbers = [10, 28, 17, 14, 25, 64, 15, 13, 19];

console.log(filter(checkAge, arrayOfNumbers));
// expected output [28, 25, 64, 19]

function checkAge(age) {
    return age >= 18;
}