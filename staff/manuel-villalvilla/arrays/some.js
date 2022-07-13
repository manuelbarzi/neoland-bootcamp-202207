function some(someFunction, array) {
    for (var i = 0; i < array.length; i++) {
        if (someFunction(array[i])) {
            return true;
        }
    }
    return false;
}

var arrayOfNumbers = [45, 65, 18, 76, 98, 34];

console.log(some(checkAge1, arrayOfNumbers));
// expected output true

console.log(some(checkAge2, arrayOfNumbers));
// expected output false

function checkAge1 (age) {
    return age >= 90;
}

function checkAge2 (age) {
    return age < 18;
}