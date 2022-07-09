// function power(val, pow) {
//   return Math.pow(val, pow);
// }

function powerFor(val, pow) {
  var result = 1;
  for (i = 0; i < pow; i++) {
    result *= val;
  }
  return result;
}

console.log(powerFor(10, 3));

console.log(powerFor(3, 4));

console.log(powerFor(0, 0));
