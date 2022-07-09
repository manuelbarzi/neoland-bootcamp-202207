//Made with concat function

// function concat() {
//   let arrayTemp = [];
//   let newArray = [];
//   // TODO ...
//   for (i = 0; i < arguments.length; i++) {
//     arrayTemp = arguments[i];
//     newArray = newArray.concat(arrayTemp);
//   }

//   return newArray;
// }

//Made without concat function but could only produce a string, not an array (so added "[" "]")

// function concat() {
//   let array = [];
//   array = arguments[0];
//   for (i = 1; i < arguments.length; i++) {
//     array += "," + arguments[i];
//   }

//   return "[" + array + "]";
// }

//Manu's Code:

// function concat(array, array2) {
//   var newArray = [];
//   var x = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     for (var j = 0; j < arguments[i].length; j++) {
//       newArray[x] = arguments[i][j];
//       x++;
//     }
//   }
//   return newArray;
// }

function concat() {
  let newArray = [];
  let index = 0;
  for (i = 0; i < arguments.length; i++)
    for (j = 0; j < arguments[i].length; j++) {
      newArray[index] = arguments[i][j];
      index++;
      // console.log(arguments[i][j]);
      // console.log(newArray);
    }
  return newArray;
}

// tests

console.log(concat([1, 2], [3, 4, 5]));
// [1, 2, 3, 4, 5]

console.log(concat(["h", "o", "l", "a"], ["m", "u", "n", "d", "o"]));
// ['h', 'o', 'l', 'a', 'm', 'u', 'n', 'd', 'o']

console.log(concat([1, 2], [3, 4], [5, 6]));
// [1, 2, 3, 4, 5, 6]
