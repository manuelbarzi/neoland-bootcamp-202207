function abs(value) {
    if (value > 0) {
        return value;
    } else {
        value = value * -1;
        return value;
    }
}

// demos

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642