function min(a, b) {
    
    if (arguments.length === 2) {
        if (a < b) 
            return a;
        else
            return b;
    } else {
        // let minValueTemp;
        // for (var i = 0; i < arguments.length; i++) {
        //     for (var j = i; j < arguments.length; j++) {
        //         if (arguments[j] < arguments[i]) {
        //             minValueTemp = arguments[j];
        //             arguments[j] = arguments[i];
        //             arguments[i] = minValueTemp;
        //         } 
        //     }
        // }
        // return arguments[0];
        var x = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] < x) {
                x = arguments[i];
            }
        }
        return x;
    }
}


// demos

console.log(min(4, 1))
// 1

console.log(min(123, 456))
// 123

console.log(min(1, 2, 3, 0, 4, 5))
// 0