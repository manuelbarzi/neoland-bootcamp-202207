var arrayOfNumbers = [10, 28, 17, 14, 25, 64, 15, 13, 19];

function filter(check, array){
    let newArray = [];
    let x=0;
    for(let i = 0; i < array.length; i++){
        if(check(array[i])){
            newArray[x] = array[i]
            x++
        }
    }
    return newArray
}
console.log(filter(checkAge, arrayOfNumbers));
// expected output [28, 25, 64, 19]

function checkAge(age) {
    return age >= 18;
}