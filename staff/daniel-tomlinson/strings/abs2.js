function abs1(a) {
  if (a >= 0) return a;
  else return a * -1;
}

function abs2(a) {
  return Math.abs(a);
}

console.log(abs1(12 * 4 + 3));
console.log(abs1(12 * 4 + 3 - 71));

console.log(abs2(12 * 4 + 3));
console.log(abs2(12 * 4 + 3 - 71));

// numero absoluto
// -21 = 21
//21 = 21
