function min() {
  minimum[0] = arguments[0];
  {
    for (let i = 0; i < arguments.length; i++)
      if (arguments[i] < minimum[0]) minimum[0] = arguments[i];
  }
  return minimum;
}
// demos

console.log(max(4, 1));
// 4

console.log(max(123, 456));
// 456

console.log(max(1, 2, 3, 0, 4, 5));
// 5
