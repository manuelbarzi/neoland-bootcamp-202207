function flat(array, depth) {
    if (!(array instanceof Array))
        throw new Error(`${array} not an array`)
     
    if (depth && typeof depth === 'number') {
        let newArr = flat(array); 
        for (let a = 1; a < depth; a++) {
            newArr = flat(newArr);
        }
        return newArr;
    }
    const newArray = []; 
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array) {
            for (let j = 0; j < array[i].length; j++) {
                newArray[newArray.length] = array[i][j]; 
            }
        } else {
            newArray[newArray.length] = array[i];
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

console.log(flat(4, 10))
// expected output error