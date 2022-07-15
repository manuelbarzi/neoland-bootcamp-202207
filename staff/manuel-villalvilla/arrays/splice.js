function splice () {
    if (arguments.length === 1) {
        throw new Error ('Not enough ARGUMENTS');
    }

    if (arguments.length === 2) {
        if (!(Array.isArray(arguments[0]))) {
            throw new Error (`${arguments[0]} not an ARRAY`);
        }
        if (isNaN(arguments[1])) {
            throw new Error ('start index not a NUMBER');
        }
        const array = arguments[0];
        let start = arguments[1];
        // check start
        if (start > array.length) {
            start = array.length;
        }
        if (start < 0) {
            start = array.length + start;
        }
        if (start === Infinity) {
            start = 0;
        }
        // FUNCION
        let deletedArray = [];
        // inserto los elementos borrados en el nuevo array
        for (let i = start; i < array.length; i++) {
            deletedArray[deletedArray.length] = array[i]; 
        }
        // borro los elementos a partir de start
        array.length = start;
        return deletedArray;
    }

    if (arguments.length === 3) {
        if (!(Array.isArray(arguments[0]))) {
            throw new Error (`${arguments[0]} not an ARRAY`);
        }
        if (isNaN(arguments[1])) {
            throw new Error ('start index not a NUMBER');
        }
        if (typeof arguments[2] === 'string' || arguments[2] instanceof Object) {
            throw new Error ('deleteCount must not be omitted if there is an ELEMENT');
        }
        const array = arguments[0];
        let start = arguments[1];
        const deleteCount = arguments[2];
        if (deleteCount <= 0) {
            throw new Error (`${deleteCount} requires more arguments`);
        }
        // check start
        if (start > array.length) {
            start = array.length;
        }
        if (start < 0) {
            start = array.length + start;
        }
        if (start === Infinity) {
            start = 0;
        }
        // FUNCION
        let deletedArray = [];
        // guardo los valores eliminados en array nuevo
        for (let z = start; z < start + deleteCount; z++) {
            // evito guardar elementos undefined en el nuevo array
            if (array[z] !== undefined) { 
                deletedArray[deletedArray.length] = array[z]; 
            }
            // sustituyo los elementos por los siguientes
            array[z] = array[z+1]; 
        }
        // reduzco el array.length
        array.length = array.length - deleteCount; 
        return deletedArray;
    }

    if (arguments.length >= 4) {
        if (!(Array.isArray(arguments[0]))) {
            throw new Error (`${arguments[0]} not an ARRAY`);
        }
        if (isNaN(arguments[1])) {
            throw new Error ('start index not a NUMBER');
        }
        if (isNaN(arguments[2])) {
            throw new Error (`${arguments[2]} not a NUMBER`);
        }
        const array = arguments[0];
        let start = arguments[1];
        const deleteCount = arguments[2];
        const elements = [];
        // compruebo que ningun elemento sea un objeto y los guardo en elements
        for (let i = 3; i < arguments.length; i++) {
            if (typeof arguments[i] !== 'object') {
                elements[elements.length] = arguments[i];
            } else {
                throw new Error ('item is not a STRING or NUMBER');
            }
        }
        // check start
        if (start > array.length) {
            start = array.length;
        }
        if (start < 0) {
            start = array.length + start;
        }
        if (start === Infinity) {
            start = 0;
        }
        // FUNCION
        let deletedArray = [];

        if (deleteCount <= 0) {
            // desplazo los elementos hacia la derecha
            for (let z = array.length - 1; z > start - 1; z--) { 
                array[z + elements.length] = array[z];
            }
            // inserto los elementos desde el start
            let index = 0;
            for (let a = start; a < start + elements.length; a++) { 
                array[a] = elements[index];
                index++;
            }
        }

        if (deleteCount > 0) {
            let tempArray = [];
            // guardo en temp los elementos antes de start:
            for (let i = 0; i < start; i++) {
                tempArray[tempArray.length] = array[i];
            }
            // inserto en temp los elementos nuevos:
            for (let z = 0; z < elements.length; z++) {
                tempArray[tempArray.length] = elements[z];
            }
            // inserto los ultimos elementos no borrados:
            for (let j = start + deleteCount; j < array.length; j++) {
                tempArray[tempArray.length] = array[j];
            }
            // guardo los elementos borrados en deletedArray
            for (let b = start; b < start + deleteCount; b++) {
                deletedArray[deletedArray.length] = array[b];
            }
            // reasigno el array original
            for (let a = 0; a < tempArray.length; a++) {
                array[a] = tempArray[a];
            }
            array.length = tempArray.length;
        }
        return deletedArray;
    }
}

const exampleArray = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];

// console.log(splice(exampleArray, 2, 1, 'pen', 'guitar')); 
// expected output ['drum']

// console.log(exampleArray); 
// expected output ['angel', 'clown', 'pen', 'guitar', 'mandarin', 'sturgeon']

// console.log(splice(exampleArray, 3, 'hola'));
// expected output ERROR

// console.log(splice(exampleArray, 3, 1));
// expected output ['mandarin']

// console.log(exampleArray);
// expected output ['angel', 'clown', 'drum', 'sturgeon']

// console.log(splice(exampleArray, 3, 10));
// expected output ['mandarin', 'sturgeon']

// console.log(exampleArray);
// expected output ['angel', 'clown', 'drum']

// console.log(splice(exampleArray, 2, 0, 'pen', 'guitar'));
// expected output []

// console.log(exampleArray);
// expected output ['angel', 'clown', 'pen', 'guitar', 'drum', 'mandarin', 'sturgeon']

// console.log(splice(exampleArray, 10, -1, 'pen', 'guitar'));
// expected output []

// console.log(exampleArray);
// expected output ['angel', 'clown', 'drum', 'mandarin', 'sturgeon', 'pen', 'guitar']

// console.log(splice(exampleArray, -2, 0, 'pen', 'guitar'));
// expected output []

// console.log(exampleArray);
// expected output ['angel', 'clown', 'drum', 'pen', 'guitar', 'mandarin', 'sturgeon']
