function abs(value) {
    // if (value > 0) {
    //     return value;
    // } else {
    //     return value *= -1;
    // }
    return value < 0 ? value * -1 : value; // Esto es un operador ternario. Es un if reducido
}

// demos

console.log(abs(2 - 7))
// 5

console.log(abs(2 * 10 * -9))
// 180

console.log(abs(1.2345 - 9.8765))
// 8.642