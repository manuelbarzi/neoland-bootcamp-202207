function replaceChar(text, search, replace) {
  // TODO ...
  let string = text[0];
  for (i = 1; i < text.length; i++)
    if (text[i] === search) string += replace;
    else string += text[i];
  return string;
}

// tests

console.log(replaceChar("hola mundo", "o", "U"));
// hUla mundU

console.log(replaceChar("0123456_89", "_", "7"));
// 0123456789

console.log(replaceChar("hell- w-rld", "-", "o"));
// hello world
