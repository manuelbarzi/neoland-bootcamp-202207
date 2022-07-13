function sort(array, compareFunction) {
    if (compareFunction && typeof compareFunction === 'function') {
        for (let i = 0; i < array.length; i++) {
            const result = compareFunction(array[i], array[i+1]);
            if (result > 0) {
                const temp = array[i];
                array[i] = array[i+1];
                array[i+1] = temp;
            } else if (result < 0) {
                const temp = array[i+1];
                array[i+1] = array[i];
                array[i] = temp;
            } else {
                // ... TODO
            }
        }
        return array;
        // [12, 1, 2, 23]
        // [1, 12, 2, 23]


    } else { 
        // convert array to array of strings
        for (let z = 0; z < array.length; z++) {
            array[z] = array[z].toString();
        }

        let minValueTemp = '';
        for (let i = 0; i < array.length; i++) {
            for (let j = i; j < array.length; j++) {
                if (array[j] < array[i]) {
                    minValueTemp = array[j];
                    array[j] = array[i];
                    array[i] = minValueTemp;
                }
            }
        }
        // if strings with numbers, convert them to numbers
        for (let j = 0; j < array.length; j++) {
            if (!isNaN(array[j])){
                array[j] = array[j] * 1;
            }
        }
        return array;
    }
}

function compare (a, b) {
    return a + b;
}

console.log(sort([12, 1, 2, 23], compare));
// expected output [1, 2, 12, 23]

console.log(sort([1, 12, 2, 23], compare));
// expected output [1, 2, 12, 23]