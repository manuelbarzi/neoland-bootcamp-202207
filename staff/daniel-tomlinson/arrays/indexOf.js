// function indexOf(array, value) {
//   // TODO
//   array = arguments[0];
//   return array.indexOf(arguments[1]);
// }

function indexOf(array, value) {
  //   // TODO

  for (i = 0; i < array.length; i++) if (array[i] === value) return i;
}

console.log(indexOf(["dog", "cat", "elephant", "monkey"], "monkey"));
// expected output: 3

console.log(indexOf(["hello", "world", "bye", "mars"], "hello"));
// expected output: 0
