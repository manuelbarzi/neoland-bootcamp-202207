function toString(array){
    for(let i = 0;i<array.length;i++)
    array[i]= ""+array[i]+""

    return array
}
let array= [1,2,3,4,5,6]
console.log(toString(array))