function min() {
  minimum[0] = arguments[0];
  {
    for (let i = 0; i < arguments.length; i++)
      if (arguments[i] < minimum[0]) minimum[0] = arguments[i];
  }
  return minimum;
}

const minimum = [];

console.log(min(4, 1, 2, 4));
// 1

console.log(min(123, 456));
// 123

console.log(min(1, 2, 3, 0, 4, 5));
// 0
