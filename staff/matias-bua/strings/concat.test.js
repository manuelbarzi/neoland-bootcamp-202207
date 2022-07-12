describe("Concat", function () {
  test("hola mundo", function () {
    check(concat("Hola", "Mundo"), "HolaMundo");
  });

  test("adios mundo cruel", function () {
    check(concat("Adios", "Mundo", "Cruel"), "AdiosMundoCruel");
  });

  test("ilovecoding", function () {
    check(concat("i", " ", "love", " ", "coding"), "i love coding");
  });
});

//   console.log(concat([1, 2], [3, 4], [5, 6]));
//   // [1, 2, 3, 4, 5, 6]

//   console.log(concat([1, 2], [3, 4], [5, 6], [7, 8]));
//   // [1, 2, 3, 4, 5, 6, 7, 8]

//   console.log(concat([1, 2], [3, 4], [5, 6], [7, 8], [9, 10]));
//   // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// });
