function sign(value) {
    if(arguments[0] > 0){
        result = 1
    }else if(arguments[0] < 0){
        result = -1
    }else{
        result = 0
    }
    return result
}

// tests

console.log(sign(3));
// 1

console.log(sign(-3));
// -1

console.log(sign(0));
// 0

console.log(sign('-3'));
// -1