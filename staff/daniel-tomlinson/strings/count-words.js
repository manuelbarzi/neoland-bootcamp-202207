//First Attempt => fails empty string tests

// function countWords(text) {
//   // TODO ...

//   //assuming all text contains minimum 1 word
//   let count = 1;
//   if (text.length === 0) count = 0;
//   for (i = 0; i < text.length; i++)
//     if (
//       text[i] === " " &&
//       text[i + 1] !== " "
//       //   ||
//       // (text[i] === " " && i <= text.length)
//     )
//       count += +1;

//   return count;
// }

//Manu's Code => fails 1 test!!

function countWords(text) {
  let countWords = 0;
  if (text[0] !== " ") countWords = 1;

  for (var i = 0; i < text.length; i++) {
    if (text[i] === " " && text[i + 1] !== " " && text[i + 1] !== undefined)
      countWords++;
  }
  return countWords;
}
