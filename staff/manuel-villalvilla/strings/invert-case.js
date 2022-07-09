function invertCase(text) {
    var abecedariom = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
    var abecedarioM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' '];
    var newText = '';
    for (var i = 0; i < text.length; i++) {
        for (var z = 0; z < abecedariom.length; z++) {
            if (text[i] === abecedariom[z]) {
                newText += abecedarioM[z];
            } else if (text[i] === abecedarioM[z]) {
                newText += abecedariom[z];
            } 
        }
        // if (text[i] === text[i].toUpperCase()) {
        //     newText += text[i].toLowerCase(); // preguntar por que no sirve editar text: text[i] = text[i].toLowerCase()
        // } else if (text[i] === text[i].toLowerCase()) {
        //     newText += text[i].toUpperCase();
        // }
    }
    return newText;
}

// tests

console.log(invertCase('Hello World'))
// hELLO wORLD

console.log(invertCase('a B c D e F'))
// A b C d E f

console.log(invertCase('i lOVe COdInG'))
// I LovE coDiNg

