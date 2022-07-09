function concat() {
  // TODO ...
  let combined = "";
  for (i = 0; i < arguments.length; i++) combined = combined + arguments[i];
  return combined;
}

// tests

console.log(concat("Hola", "Mundo"));
// HolaMundo

console.log(concat("Adios", "Mundo", "Cruel"));
// AdiosMundoCruel

console.log(concat("i", " ", "love", " ", "coding"));
// i love coding
