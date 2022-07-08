function min(a, b) {
    // TODO ...
    if (arguments.length === 2) {
        if (a < b) 
            return a;
        else
            return b;
    } else {
        let minValueTemp;
        for (var i = 0; i < arguments.length; i++) {
            for (var j = i; j < arguments.length; j++) {
                if (arguments[j] < arguments[i]) {
                    minValueTemp = arguments[j];
                    arguments[j] = arguments[i];
                    arguments[i] = minValueTemp;
                } 
            }
        }
        return arguments[0];
    }
}


// demos

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5))
// 0