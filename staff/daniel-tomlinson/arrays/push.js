// function push() {
//   // TODO
//   let array = arguments[0];
//   let elements = "";
//   let newArray = "";
//   for (i = 0; i < arguments.length - 1; i++) {
//     elements = arguments[i + 1];
//     newArray = array.push(elements);
//     // console.log(newArray);
//   }
//   return newArray;
// }

function push() {
  // TODO
  let array = arguments[0];
  length = array.length;
  for (i = 1; i < arguments.length; i++) {
    array[array.length] = arguments[i];
  }
  return array.length;
}

var numbers = [0, 1, 2, 3];

console.log(push(numbers, 7));
// expected output: 5

console.log(numbers);
// expected output: [0, 1, 2, 3, 7]

var animals = ["cat", "dog", "elephant"];

console.log(push(animals, "monkey", "frog"));
// expected output: 5

console.log(animals);
// expected output: ['cat', 'dog', 'elephant', 'monkey', 'frog']
