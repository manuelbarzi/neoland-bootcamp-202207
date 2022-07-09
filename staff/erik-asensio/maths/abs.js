function abs(value) {
    if (value > 0){
        value = value + value + value
    }else if(value < 0){
        value = value - value - value
    }else{
        value = value
    }
    return value
}

// tests

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642

