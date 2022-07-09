function min() {
  var minimum = arguments[0];

  for (i = 1; i < arguments.length; i++) {
    if (arguments[i] < minimum) {
      minimum = arguments[i];
    }
  }
  return minimum;
}

// TODO ...
// if (a < b )
//     return a

// else ( b < a )
//     return b

// demos

console.log(min(4, 1));
// 1

console.log(min(123, 456));
// 123

console.log(min(1, 2, 3, 0, 4, 5));
// 0
