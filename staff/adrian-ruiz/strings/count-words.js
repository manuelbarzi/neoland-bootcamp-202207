function countWords(text) {
    let wordCount

    if(text[0]=== " "){
        wordCount = 0;
    }else wordCount = 1;

    for(let i = 0; i < text.length; i++){
        
        if(text[i] === " " && text[i+1]!== " " && (i+1)!==text.length){
            wordCount += 1
        }
        
    }
    
    return wordCount
}

// tests

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5

console.log(countWords('   123  123  '))

console.log(countWords('   '))