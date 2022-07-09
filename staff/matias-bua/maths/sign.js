function sign(value) {
  // TODO ...

  debugger;

  if (value > 0) {
    return 1;
  } else if (value < 0) return -1;
  else if (value === 0) return 0;
}

// demos

console.log(sign(3));
// 1

console.log(sign(-3));
// -1

console.log(sign(0));
// 0

console.log(sign("-3"));
// -1
