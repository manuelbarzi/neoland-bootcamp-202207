function countWords(text) {
  // TODO ...

  //assuming all text contains minimum 1 word
  let count = 1;
  for (i = 0; i < text.length; i++) if (text[i] === " ") count += +1;

  return count;
}

// tests

console.log(countWords("adiós mundo cruel"));
// 3

console.log(countWords("hello world"));
// 2

console.log(countWords("1 2 3 4 5"));
// 5
