function countWords(text) {
    let countWords = 0;
    if (text[0] !== ' ')
        countWords = 1;
    
    for (var i = 0; i < text.length; i++) {
        if (text[i] === ' ' && (text[i+1] !== ' ') && (text[i+1] !== undefined))
            countWords++;
    }
    return countWords;
} 

// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('helloworld'))
// 1

console.log(countWords('1 2 3 4 5'))
// 5

console.log(countWords('    '));
// 0