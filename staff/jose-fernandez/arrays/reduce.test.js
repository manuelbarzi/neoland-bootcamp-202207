// describe('reduce',()=>{
//     test('test 1',()=>{

//     })
// })

const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
// const initialValue = 1;
const sumWithInitial = array1.reduce(function
    (previousValue, currentValue,indice,array1) {
    console.log({previousValue ,currentValue,indice, array1})
    return previousValue * currentValue
    // , initialValue
  
});
console.log("=============================");

console.log(sumWithInitial);
// expected output: 10
