function max(a, b) {
    // TODO ...
    // console.log(arguments.length);
    if (arguments.length === 2) {
        if (a > b) 
            return a;
        else
            return b;
    } else {
        let maxValueTemp;
        for (var i = 0; i < arguments.length; i++) {
            for (var j = i; j < arguments.length; j++) {
                if (arguments[j] > arguments[i]) {
                    maxValueTemp = arguments[j];
                    arguments[i] = arguments[j];
                    arguments[j] = maxValueTemp;
                } 
            }
        }
        return arguments[0];
    }
}

// demos

console.log(max(4, 1))
// 4

console.log(max(123, 456))
// 456

console.log(max(1, 2, 3, 0, 4, 5))
// 5