function abs(value) {
    if (value < 0)
        return value * -1
    else
        return value
}

// tests

console.log('TEST abs')

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642

console.log(abs(7 - 2))
// 5