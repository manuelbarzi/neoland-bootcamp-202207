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
