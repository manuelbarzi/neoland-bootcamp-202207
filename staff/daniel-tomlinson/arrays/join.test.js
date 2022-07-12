describe("join", function () {
  test("joins with space", function () {
    const elements = ["Fire", "Air", "Water", "Earth"];
    const separator = " ";

    const result = join(elements, separator);

    check(
      result,
      elements[0] + seperator,
      elements[1] + seperator,
      elements[2] + seperator
    );
  });
});

// console.log(join(["Fire", "Air", "Water"], " "));
// // Fire Air Water

// console.log(join(["Fire", "Air", "Water"], ""));
// // FireAirWater

// console.log(join(["Fire", "Air", "Water"], "-"));
// // Fire-Air-Water

// console.log(join(["Fire", "Air", "Water"]));
// // Fire,Air,Water
