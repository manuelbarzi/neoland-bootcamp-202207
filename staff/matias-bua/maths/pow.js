

function power(Val,pow){

    var r = 1;
    for (var j = 0 ; j < pow ; j++){

        r *= Val
    }
    return r
    
}

console.log(power(10,3))
    //1000

console.log(power(3,4))
    //81

console.log(power(2,3))
    //8