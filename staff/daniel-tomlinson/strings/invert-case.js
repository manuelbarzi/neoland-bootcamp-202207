function invertCase(text) {
  var newString = "";

  for (i = 0; i < text.length; i++) {
    var characterNew = "";

    if (text[i].toUpperCase() === text[i]) characterNew = text[i].toLowerCase();
    else characterNew = text[i].toUpperCase();

    newString += characterNew;
    // newString = newString.concat(newString, characterNew);
  }
  return newString;
}

// var character = "";

// tests

console.log(invertCase("Hello World"));
// hELLO wORLD

console.log(invertCase("a B c D e F"));
// A b C d E f

console.log(invertCase("i lOVe COdInG"));
// I LovE coDiNg
