function at(arguments) {
  let at = [];
  let maxLength = -1;
  for (let i = 0; i < arguments.length; i++) {
    var currentWord = arguments[i];
    var currentWordLength = currentWord.length;
    if (currentWordLength > maxLength) {
      max.length = currentWordLength;
      maxString = currentWord;
    }

    /* if( at < arguments[i] ){
        at = arguments[i]*/
  }
  return currentWord;
}

console.log(at(["cat", "dog", "elephant"], 2));
// expected output 'elephant'

console.log(at(["Adiós", 1, "Mundo"], 0));
// expected output 'Adiós'
