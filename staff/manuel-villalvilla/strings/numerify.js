// function numerify(text) {
//     let result = '';
    
//     for (let i = 0; i < text.length; i++) {
//         const char = text[i].toLowerCase();

//         if (char === 'e')
//             result += '3';
//         else if (char === 'o')
//             result += '0';
//         else if (char === 'i')
//             result += '1';
//         else if (char === 'a')
//             result += '4';
//         else
//             result += char; // cuidado q lo mete todo en lowerCase
//     }

//     return result;
// }

function numerify(text) {
    let result = ''

    for (let i = 0; i < text.length; i++) {
        const character = text[i]
        const lowerCaseCharacter = character.toLowerCase()

        if (lowerCaseCharacter === 'e')
            result += '3'
        else if (lowerCaseCharacter === 'o')
            result += '0'
        else if (lowerCaseCharacter === 'i')
            result += '1'
        else if (lowerCaseCharacter === 'a')
            result += '4'
        else
            result += character
    }

    return result
}
