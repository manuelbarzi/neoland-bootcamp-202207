function countWords(text) {
    var number = 0
    for (var i = 0; i < text.length; i++) {
        if (text[i] === " ")
            number = number + 1
        var result = number + 1
    }
    return result
}
// function countWords(text) {
//     var words = text.split (' ')
//     result = words.length

//     return result
// }

console.log(countWords('adiós mundo cruel'))
// 3

console.log(countWords('hello world'))
// 2

console.log(countWords('1 2 3 4 5'))
// 5