function flat (array, depth) {
    if (depth) {
        let newArr = flat(array); // funcion recursiva
        for (let a = 1; a < depth; a++) {
            newArr = flat(newArr);
        }
        return newArr;
    } 
    const newArray = [];
    let index = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === 'object') {
            for (let j = 0; j < array[i].length; j++) {
                if (typeof array[i][j] === 'number') {
                    newArray[index] = array[i][j];
                    index++;
                } else {
                    newArray[index] = array[i][0];
                    index++;
                }
            }
        } else {
            newArray[index] = array[i];
            index++
        }
    }
    return newArray;
}

console.log(flat([0, 1, 2, [[3, 4]]]));
// expected output [0, 1, 2, [3, 4]]

console.log(flat([0, 1, 2, [3, 4]]));
// expected output [0, 1, 2, 3, 4]

console.log(flat([[0, 1], 2, [[3, 4]], 5, 6, [[[7, 8]]]]));
// expected output [0, 1, 2, [3, 4], 5, 6, [[7, 8]]]

console.log(flat([0, 1, 2, [[[3, 4]]]], 2))
// expected output [0, 1, 2, [3, 4]]

console.log(flat([0, 1, 2, [[[3, 4]]]], 3))
// expected output [0, 1, 2, 3, 4]

console.log(flat([0, [[1, 2]], [[[3, 4]]]], 1))
// expected output [0, [1, 2], [[3, 4]]]

console.log(flat([0, [[1, 2]], [[[3, 4]]]], 10))
// expected output [0, 1, 2, 3, 4]