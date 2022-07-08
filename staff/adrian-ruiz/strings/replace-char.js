function replaceChar(text, search, replace) {
    //return text.replaceAll(search, replace)
    var newText = ""
    for(let i = 0; i < text.length; i++){
        if(text[i] === search)
            newText = newText + replace
        else{
            newText = newText + text[i]
        }
    }
    return newText
}



// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

console.log(replaceChar('hell- w-rld', '-', 'o'))
// hello world