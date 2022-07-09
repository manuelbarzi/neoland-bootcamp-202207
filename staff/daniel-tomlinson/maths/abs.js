// function abs() {
//   // TODO implement me
//   let argument = arguments;
//   let argumentString = argument.toString();
//   let argumentSlice = argumentString.slice(19, 4);
//   //   console.log(argument);
//   console.log(argumentString);
// }

function abs() {
  // TODO implement me
  return Math.abs(arguments[0]);
}

// demos

console.log(abs(2));
// 5

console.log(abs(2 * 10 * -9));
// 180

console.log(abs(1.2345 - 9.8765));
// 8.642

//Absolute 2

function abs1(a) {
  if (a >= 0) return a;
  else return a * -1;
}

// function abs2(a) {
//   return Math.abs(a);
// }

console.log(abs1(12 * 4 + 3));
console.log(abs1(12 * 4 + 3 - 71));

console.log(abs2(12 * 4 + 3));
console.log(abs2(12 * 4 + 3 - 71));

// numero absoluto
// -21 = 21
//21 = 21
