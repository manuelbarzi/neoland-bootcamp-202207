// tests

describe("TEST: invert case", function () {
  test("Hello World", function () {
    check(invertCase("Hello World"), "hELLO wORLD");
  });
  test("a B c D e F", function () {
    check(invertCase("a B c D e F"), "A b C d E f");
  });
  test("i lOVe COdInG", function () {
    check(invertCase("i lOVe COdInG"), "I LovE coDiNg");
  });
});

// console.log(invertCase("Hello World"));
// // hELLO wORLD

// console.log(invertCase("a B c D e F"));
// // A b C d E f

// console.log(invertCase("i lOVe COdInG"));
// // I LovE coDiNg
