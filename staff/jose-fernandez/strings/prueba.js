// function replaceChar(text, search, replace) {
//     // TODO ...

//     for (let i = 0; i<text; i++) {
//         if (text[i] == search) {
//             search = replace
//         }
//     }
//     return text
// }
function replaceChar(text, search, replace) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
      if (text[i] == search) {
          result = result + replace;
      } else {
          result = result + text[i];
      }
  }
  return result;
}


// tests

console.log(replaceChar('hola mundo', 'o', 'U'))
// hUla mundU

console.log(replaceChar('0123456_89', '_', '7'))
// 0123456789

console.log(replaceChar('hell- w-rld', '-', 'o'))
// hello world