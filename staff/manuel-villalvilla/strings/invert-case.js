function invertCase(text) {
    var newText = '';
    for (var i = 0; i < text.length; i++) {
        if (text[i] === text[i].toUpperCase()) {
            newText += text[i].toLowerCase(); // preguntar por que no sirve editar text: text[i] = text[i].toLowerCase()
        } else if (text[i] === text[i].toLowerCase()) {
            newText += text[i].toUpperCase();
        }
    }
    return newText;
//     // TODO ...
}

// tests

console.log(invertCase('Hello World'))
// hELLO wORLD

console.log(invertCase('a B c D e F'))
// A b C d E f

console.log(invertCase('i lOVe COdInG'))
// I LovE coDiNg

