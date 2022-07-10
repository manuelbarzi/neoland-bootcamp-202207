function includes(element, start, array) {
    var l = arguments.length;
    if (l === 3) {
        for (var i = start; i < array.length; i++) {
            if (array[i] === element) {
                return true;
            }
        }
        return false;
    } else if (l === 2) {
        for (var i = 0; i < arguments[1].length; i++) {
            if (arguments[1][i] === element) {
                return true;
            }
        }
        return false;
    }
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(includes('Mango', fruits));
// expected output true

console.log(includes('Banana', 3, fruits));
// expected output false