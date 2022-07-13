function find (array, testingFunction) {
    if (Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (testingFunction(array[i])) {
                return array[i];
            }
        }
    }
    return undefined;
}

function checkNumber (element) {
    return element > 10;
}

console.log(find([5, 12, 8, 130, 44], checkNumber));
// expected output 12

console.log(find([5, 120, 8, 13, 44], checkNumber));
// expected output 120

console.log(find([5, 4, 2, 1, 7], checkNumber));
// expected output undefined