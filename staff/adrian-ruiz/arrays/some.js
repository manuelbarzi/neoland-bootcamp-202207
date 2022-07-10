var arrayOfNumbers = [45, 65, 18, 76, 98, 34];

function some(checkAge, array){
    for(let i = 0; i < array.length; i++){
        if(checkAge(array[i])){
            return true
        }
    }
    return false
}
console.log(some(checkAge1, arrayOfNumbers));
// expected output true

console.log(some(checkAge2, arrayOfNumbers));
// expected output false

function checkAge1 (age) {
    return age >= 90;
}

function checkAge2 (age) {
    return age < 18;
}