
function pow (value, power){
    var total = value

    for( i = 1; i < power; i++){
        total = value * total
    }
   
    return total
}

//demo

console.log(pow(10, 3))
//1000

console.log(pow(3,4))
//81

console.log(pow(2,3))
//8

