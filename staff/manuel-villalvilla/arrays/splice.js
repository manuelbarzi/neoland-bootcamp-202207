function splice (array, start, deleteCount, ...elements) {
    //check types:
    if (!(Array.isArray(array))) {
        throw new Error (`${array} not an ARRAY`);
    }
    if ((start && isNaN(start)) || (deleteCount && isNaN(deleteCount))) {
        throw new Error ('start or deleteCount not a NUMBER');  
    }
    if (elements) {
        for (let i = 0; i < elements.length; i++) {
            if (typeof elements[i] === 'object') {
                throw new Error ('item is not a STRING or NUMBER');
            }
        }
    }
    
    //check start:
    if (!!start) {
        throw new Error ('Start index value required as ARGUMENT');
    }
    if (start > array.length) {
        start = array.length;
    }
    if (start < 0) {
        start = array.length + start;
    }
    if (start === Infinity) {
        start = 0;
    }

    //check deleteCount
    if (!!deleteCount && elements.length > 0) { 
        throw new Error ('deleteCount must not be omitted if there is an ELEMENT');
    }
    if (deleteCount === 0 || deleteCount < 0) {
        if (elements.length === 0) {
            throw new Error ('An item must be inserted for this DELETECOUNT');
        }
    }

    // function:
    
    if (deleteCount > 0 && elements.length === 0) {
        for (let z = start; z < start + deleteCount; z++) {
            array[z] = array[z+1];
        }
        array.length = array.length - deleteCount;
    }
    if (deleteCount === 0 || deleteCount < 0) {
        array.length = array.length + elements.length;
        // for (let z = 0; z < elements.length; z++) {
        //     array[start] = elements[z];
        // }
    }
    return array;
}


console.log(splice(['angel', 'clown', 'drum', 'mandarin', 'sturgeon'], 3, 1));
// expected output ['angel', 'clown', 'drum', 'sturgeon']

console.log(splice(['angel', 'clown', 'drum', 'mandarin', 'sturgeon'], 2, 'drum', 'guitar'));
// expected output ['angel', 'clown', 'drum', 'sturgeon']






