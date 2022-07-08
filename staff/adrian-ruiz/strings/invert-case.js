function invertCase(text) {
    // TODO ...
    var newText = "";
    for(var i = 0; i < text.length; i++){
        if(text[i] === text[i].toLowerCase()){
            newText += text[i].toUpperCase();
        }else{
            newText += text[i].toLowerCase();
        }
    }
    return newText
}

// tests

console.log(invertCase('Hello World'))
// hELLO wORLD

console.log(invertCase('a B c D e F'))
// A b C d E f

console.log(invertCase('i lOVe COdInG'))
// I LovE coDiNg