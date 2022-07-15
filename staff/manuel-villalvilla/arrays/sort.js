function sort(array, compareFunction) {

    // move undefineds if exist to the end:
    if (Array.isArray(array)) {
        for (let d = 0; d < array.length; d++) {
            if (array[d] === undefined) {
                let undefineds = [];
                let objArray = [];
                for (let a = 0; a < array.length; a++) {
                    if (array[a] === undefined) {
                        undefineds[undefineds.length] = array[a];
                    }
                    if (array[a] !== undefined) {
                        objArray[objArray.length] = array[a];
                    }
                }
                for (let b = 0; b < undefineds.length; b++) {
                    objArray[objArray.length] = undefineds[b];
                }
                for (let c = 0; c < array.length; c++) {
                    array[c] = objArray[c];
                }
                break;
            }
        }
    }

    // sort with compareFunction:
    if (compareFunction && typeof compareFunction === 'function' && Array.isArray(array)) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] !== undefined && array[i+1] !== undefined) {
                const condition = compareFunction(array[i], array[i + 1])

                if (condition > 0) {
                    let temp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = temp;

                    for (let z = i; z > 0; z--) {
                        let condition2 = compareFunction(array[z - 1], array[z])
                        if (condition2 > 0) {
                            let temp2 = array[z - 1];
                            array[z - 1] = array[z];
                            array[z] = temp2;
                        } else {
                            break;
                        }
                    }
                }
            }
        }
        return array;

    } else if (Array.isArray(array)) {
        // convert array to array of strings
        for (let z = 0; z < array.length; z++) {
            if (array[z] !== undefined) {
                array[z] = array[z].toString();
            }
        }
        // sort order ascending:
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
            if (!isNaN(array[j])) {
                array[j] = array[j] * 1;
            }
        }
        return array;
    }
}



