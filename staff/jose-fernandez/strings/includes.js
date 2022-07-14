function includes(string, element) {
    let result 
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] == element) {
            result = true
            break;
        }
        else {
            result = false
        }
    }
    return result
}
console.log(includes("array Of Numbers", 'd'))