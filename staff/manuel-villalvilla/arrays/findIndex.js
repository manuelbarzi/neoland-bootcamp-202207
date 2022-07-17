function findIndex() {
    if (arguments.length < 2) {
        throw new Error ('Not enough ARGUMENTS');
    }
    if (arguments.length === 2) {
        if (!Array.isArray(arguments[0])) {
            throw new Error ('First argument must be ARRAY');
        }
        if (typeof arguments[1] !== 'function') {
            throw new Error ('Second argument must be CALLBACKFN');
        }
        const array = arguments[0];
        const callbackFn = arguments[1];

        for (let i = 0; i < array.length; i++) {
            if (callbackFn(array[i])) {
                return i;
            }
        }
        return -1;
    }
    if (arguments.length > 2) {
        throw new Error ('Too many ARGUMENTS');
    }
}

const exampleArray = [5, 12, 8, 130, 44];
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

console.log(findIndex(exampleArray, (element) => element > 18));
// expected output 3

console.log(findIndex(exampleArray, (element) => element < 4));
// expected output -1

console.log(findIndex(fruits, (element) => element === 'cantaloupe'));
// expected output 2

const index = findIndex(fruits, (fruit) => fruit === 'banana');
console.log(index);
// expected output 1
console.log(fruits[index]);
// expected output banana
