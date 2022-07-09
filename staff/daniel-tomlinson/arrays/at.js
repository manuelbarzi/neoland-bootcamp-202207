function at() {
  //TODO
  array = arguments[0];
  return array[arguments[1]];
  return arguments;
}

console.log(at(["cat", "dog", "elephant"], 2));
// expected output 'elephant'

console.log(at(["Adiós", 1, "Mundo"], 0));
// expected output 'Adiós'
