function max(a, b) {
    
    if (arguments.length === 2) {
        if (a > b) 
            return a;
        else
            return b;
    } else {
        // let maxValueTemp;
        // for (var i = 0; i < arguments.length; i++) {
        //     for (var j = i; j < arguments.length; j++) {
        //         if (arguments[j] > arguments[i]) {
        //             maxValueTemp = arguments[j];
        //             arguments[i] = arguments[j];
        //             arguments[j] = maxValueTemp;
        //         } 
        //     }
        // }
        // return arguments[0];
        var x = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            if (arguments[i] > x) {
                x = arguments[i];
            }
        }
        return x;
    }
}

// demos

console.log(max(4, 1))
// 4

console.log(max(123, 456))
// 456

console.log(max(1, 2, 3000, 0, 4, 5, 4000))
// 5