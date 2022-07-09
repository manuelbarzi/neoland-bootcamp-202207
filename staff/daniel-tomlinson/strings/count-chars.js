function countChars(text) {
  let string = "";
  for (i = 0; i < text.length; i++) if (text[i] !== " ") string += text[i];
  return string.length;
  // TODO ...
}

// tests

console.log(countChars("hola mundo"));
// 9

console.log(countChars("hello world"));
// 10

console.log(countChars("1 2 3 4 5"));
// 5
