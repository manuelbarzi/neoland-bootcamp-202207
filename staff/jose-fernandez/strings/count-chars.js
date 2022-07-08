// falta eliminar los espacios 
function countChars(text) {
    let pep
    for(let i=0;i<arguments.length;i++){
        pep=arguments[i].length;
    }
    
    return pep


}

// tests

console.log(countChars('hola mundo'))
// 9

console.log(countChars('hello world'))
// 10

console.log(countChars('1 2 3 4 5'))
// 5