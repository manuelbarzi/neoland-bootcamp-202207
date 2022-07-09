function countWords(text) {
  // TODO ...

  //assuming all text contains minimum 1 word
  let count = 1;
  if (text.length === 0) count = 0;
  for (i = 0; i < text.length; i++)
    if (
      text[i] === " " &&
      text[i + 1] !== " "
      // ||
      // (text[i] === " " && i <= text.length)
    )
      count += +1;

  return count;
}

// tests

console.log(countWords("adiós mundo cruel"));
// 3

console.log(countWords("hello    world"));
// 2

console.log(countWords("1 2 3 4 5"));
// 5

console.log(countWords("hello   world"));
// 2

console.log(countWords("       "));
// 0

console.log(countWords(""));
console.log(countWords(" "));
console.log(countWords("  "));
console.log(countWords("   "));
console.log(countWords("    "));
console.log(countWords("     "));
// 0
