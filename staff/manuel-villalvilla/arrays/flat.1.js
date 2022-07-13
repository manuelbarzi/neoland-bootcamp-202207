function flat (array, depth) {
    if (!(array instanceof Array))
        throw new Error()
    if (Array.isArray(array)) { // compruebo si el array pasado es un array lo primero
        if (depth && typeof depth === 'number') {
            let newArr = flat(array); // funcion recursiva
            for (let a = 1; a < depth; a++) {
                newArr = flat(newArr);
            }
            return newArr;
        } 
        const newArray = [];
        // let index = 0; 
        for (let i = 0; i < array.length; i++) {
            if (typeof array[i] === 'object') { // por esta linea de codigo se pueden filtrar objetos q no sean arrays
                for (let j = 0; j < array[i].length; j++) {
                    if (typeof array[i][j] === 'number') {
                        newArray[newArray.length] = array[i][j]; // esto se puede reducir a una sola linea
                        // index++;
                    } else {
                        newArray[newArray.length] = array[i][0];
                        // index++;
                    }
                }
            } else {
                newArray[newArray.length] = array[i];
                // index++;
            }
        }
        return newArray;
    }
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