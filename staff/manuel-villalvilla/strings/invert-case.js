function invertCase(text) {
    var abecedariom = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'ñ', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    var abecedarioM = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    var newText = '';
    for (var i = 0; i < text.length; i++) {
        for (var z = 0; z < abecedariom.length; z++) {
            if (text[i] === abecedariom[z]) {
                newText += abecedarioM[z];
                break; // añado el break porque ya no hace falta que continue buscando la letra
            } else if (text[i] === abecedarioM[z]) {
                newText += abecedariom[z];
                break; // añado el break porque ya no hace falta que continue buscando la letra 
            } else if (z === abecedariom.length - 1) {
                newText += text[i]; // añado esta linea para que cuando llegue al final, si no ha encontrado el caracter, añada el caracter original
            }
        }
    }
    
    // if (text[i] === text[i].toUpperCase()) {
    //     newText += text[i].toLowerCase(); // preguntar por que no sirve editar text: text[i] = text[i].toLowerCase()
    // } else if (text[i] === text[i].toLowerCase()) {
    //     newText += text[i].toUpperCase();
    // }
    return newText;
}


