function filter(filterFunction, array) {
    if (Array.isArray(array) && typeof filterFunction === 'function') {
        const newArray = [];
        // let x = 0;
        for (let i = 0; i < array.length; i++) {
            if (filterFunction(array[i])) {
                newArray[newArray.length] = array[i];
                // x++
            }
        }
        return newArray;
    }
}

var arrayOfNumbers = [10, 28, 17, 14, 25, 64, 15, 13, 19];
const people = [
    { name: 'Peter', surname: 'Pan' },
    { name: 'James', surname: 'Hook' },
    { name: 'Pepito', surname: 'Grillo' },
    { name: 'Wendy', surname: 'Pan' },
    { name: 'Pinocho', surname: 'Grillo' }
]

function checkAge(age) {
    return age >= 18;
}

function filterSurname (person) {
    return person.surname === 'Pan';
}

console.log(filter(checkAge, arrayOfNumbers));
// expected output [28, 25, 64, 19]

console.log(filter(filterSurname, people));
// expected output [{ name: 'Peter', surname: 'Pan'},{ name: 'Wendy', surname: 'Pan'}]

