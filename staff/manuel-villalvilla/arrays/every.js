function every(everyFunction, array) {
    for (var i = 0; i < array.length; i++) {
        if (everyFunction(array[i]) === false) {
            return false;
        }
    }
    return true;
}

var arrayOfNumbers = [45, 65, 18, 76, 98, 34];

console.log(every(checkAge1, arrayOfNumbers));
// expected output true

console.log(every(checkAge2, arrayOfNumbers));
// expected output false

function checkAge1 (age) {
    return age >= 18;
}

function checkAge2 (age) {
    return age >= 20;
}