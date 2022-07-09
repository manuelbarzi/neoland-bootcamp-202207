function concat() {
  let arrayTemp = [];
  let newArray = [];
  // TODO ...
  for (i = 0; i < arguments.length; i++) {
    arrayTemp = arguments[i];
    newArray = newArray.concat(arrayTemp);
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
