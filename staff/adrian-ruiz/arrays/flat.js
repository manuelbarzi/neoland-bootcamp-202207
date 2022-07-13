function flat(array, depth){
    var newArray =[]
    if(depth){    // Cuando 
        var newArray = array
        for(let i = 0; i < depth; i++){
            var newArray = flat(newArray)
        }
    }

    if (depth === undefined){   // Defino el comportamiento cuando solo pasemos el array
        var x = 0
        for(let i = 0; i < array.length; i++){
           
            if(array[i].length){    // En caso de que no exista un array, no entrará aquí
                for(let j=0; j < array[i].length; j++){ // Bucle para recorrer el elemento con "length", osea, otro array
                
                newArray[x] = array[i][j]
                x++                 // Esto es para controlar la posición donde ponemos el elemento en el array
            }
            
            }else{                  // Si el length no existe directamente devolvemos el elemento
                newArray[x] = array[i]
                x++
            }
        }
    }
    return newArray
}

console.log(flat([0, 1, 2, [3, 4]]));
// expected output [0, 1, 2, 3, 4]

console.log(flat([[0, 1], 2, [[3, 4]], 5, 6, [[[7, 8]]]]));
// expected output [0, 1, 2, [3, 4], 5, 6, [[7, 8]]]

console.log(flat([0, 1, 2, [[[3, 4]]]], 2))
// expected output [0, 1, 2, [3, 4]]

console.log(flat([0, 1, 2, [[[3, 4]]]], 3))
// expected output [0, 1, 2, 3, 4]

console.log(flat([0, [[1, 2]], [[[3, 4]]]], 1))
// expected output [0, [1, 2], [[3, 4]]]

console.log(flat([0, [[1, 2]], [[[3, 4]]]], 10))
// expected output [0, 1, 2, 3, 4]