// potencias
function power(val, pow) {
    // TODO implement me
    var result = 1;
    // result = Math.pow(val, pow);
    for (var i = 0; i < pow; i++) {
        result = result * val;
    }
    return result;
}

// demo

console.log(power(10, 3));
//1000

console.log(power(3,4));
//81

console.log(power(2,3))
//8