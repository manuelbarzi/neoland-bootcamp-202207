

function includes(word, indexStart, array){
    var l = arguments.length

    if(l === 3){
        for(let i = indexStart; i < array.length ; i++){
            if(array[i] === word){
                return true
            }else return false
        }
    }else if(l === 2){
        for(let i = 0; i < arguments[1].length; i++){
            if(arguments[1][i] === word){
                return true;
            }
        }
    }return false
    
}

var fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log(includes('Mango', fruits));
// expected output true

console.log(includes('Banana', 3, fruits));
// expected output false