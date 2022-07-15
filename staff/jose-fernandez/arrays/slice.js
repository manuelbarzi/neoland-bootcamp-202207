function slice(array,start,end) {
    let sliced = []
    // test2
    if(end == undefined)
    end= array.length
    
    //test 3 
    // if(start<0)
    // start= array.length-start

    for (let i = start; i < end; i++) {
        const element=array[i]
        sliced[sliced.length]=element

    }
    return sliced
}

//             // 0---------------------------------------------0
// const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log(slice(animals,2));
// // expected output: Array ["camel", "duck", "elephant"]

// console.log(animals.slice(2, 4));
// // // expected output: Array ["camel", "duck"]

// console.log(animals.slice(1, 5));
// // // expected output: Array ["bison", "camel", "duck", "elephant"]

// console.log(animals.slice(-2));
// // // expected output: Array ["duck", "elephant"]

// console.log(animals.slice(2, -1));
// // // expected output: Array ["camel", "duck"]

// console.log(animals.slice(3,-3));
// // // expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
