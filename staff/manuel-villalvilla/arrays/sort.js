function sort(array, compareFunction) {
    if (compareFunction) {
        const result = compareFunction(array[0], array[1]);
        if (result > 0) {
            let minValueTemp = '';
            for (var i = 0; i < array.length; i++) {
                for (var j = i; j < array.length; j++) {
                    if (array[j] < array[i]) {
                        minValueTemp = array[j];
                        array[j] = array[i];
                        array[i] = minValueTemp;
                    } 
                }
            }
        return array;
        } else if (result < 0) {
            let maxValueTemp = '';
            for (var i = 0; i < array.length; i++) {
                for (var j = i; j < array.length; j++) {
                    if (array[j] > array[i]) {
                        maxValueTemp = array[j];
                        array[j] = array[i];
                        array[i] = maxValueTemp;
                    } 
                }
            }
        return array;
        } else {
            return array;
        }
    } else { // no compareFunction
        // convert array to array of strings
        for (let z = 0; z < array.length; z++) {
            array[z] = array[z].toString();
        }

        let minValueTemp = '';
        for (var i = 0; i < array.length; i++) {
            for (var j = i; j < array.length; j++) {
                if (array[j] < array[i]) {
                    minValueTemp = array[j];
                    array[j] = array[i];
                    array[i] = minValueTemp;
                }
            }
        }
        // if strings with numbers, convert them to numbers
        for (var j = 0; j < array.length; j++) {
            if (!isNaN(array[j])){
                array[j] = array[j] * 1;
            }
        }
        return array;
    }
}