function join() {
  // TODO ...
  let array1 = arguments[0];
  let newString = array1[0];
  for (i = 1; i < array1.length; i++)
    if (arguments.length === 2) newString += arguments[1] + array1[i];
    else {
      newString += "," + array1[i];
    }
  return newString;
}

// tests;

console.log(join(["Fire", "Air", "Water"], " "));
// Fire Air Water

console.log(join(["Fire", "Air", "Water"], ""));
// FireAirWater

console.log(join(["Fire", "Air", "Water"], "-"));
// Fire-Air-Water

console.log(join(["Fire", "Air", "Water"]));
// Fire,Air,Water
